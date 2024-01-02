import './App.css';
import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import AOS from 'aos';
import useStyles from './styles.js';
import NewsCards from './components/Newscards/NewsCards';

import newsimg from './components/images/newsimg.png';
// import voiceassistancenews from './components/images/voiceassistancenews.png';




import { Typography } from '@material-ui/core';

// const alanKey = '9d0a52bc9c55f689f17876c61a435b8c2e956eca572e1d8b807a3e2338fdd0dc/stage'; // Replace with your Alan API key

const alanKey = 'c3e379c0de48a945f17876c61a435b8c2e956eca572e1d8b807a3e2338fdd0dc/stage'; // Replace with your Alan API key

function App(props) {
  const classes = useStyles();
  const [hasHandledCommand, setHasHandledCommand] = useState(false);
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  // Create the Alan Button instance only once
  useEffect(() => {
 
    AOS.init({
      once:false,
      mirror:true
    });

    const alanInstance = alanBtn({
      key: alanKey,
      onCommand: (commandData) => {
        const { command, articles, number } = commandData;
  
        if (command === 'newHeadlines' && !hasHandledCommand) {
          setNewsArticles(articles);
          setActiveArticle(-1);
  
          // Set a flag to indicate that the command was handled
          setHasHandledCommand(true);
  
          // Use a timeout to reset the flag after a delay
          setTimeout(() => {
            setHasHandledCommand(false);
          }, 2000);
        } else if (command === 'highlight') {
          setActiveArticle((prevArticle) => prevArticle + 1);
        }
         else if (command === 'open') {
          // Trim the number to remove leading/trailing spaces
          const trimmedNumber = number.trim();
        
          try {
            const parsedNumber = parseInt(trimmedNumber);
        
            if (!isNaN(parsedNumber)) {
              if (articles && Array.isArray(articles) && articles.length >= parsedNumber && parsedNumber >= 1) {
                const article = articles[parsedNumber - 1];
        
                if (article && article.url) {
                  // Use window.open to open the URL in a new tab
                  window.open(article.url, '_blank');
                  alanInstance.playText('Opening...');
        
                  // Update the activeArticle state for scrolling
                  setActiveArticle(parsedNumber - 1);
                } else {
                  alanInstance.playText('Sorry, I couldn\'t find the URL for that article.');
                }
              } else {
                alanInstance.playText('Please provide a valid article number.');
              }
            } else {
              alanInstance.playText('Please provide a valid article number.');
            }
          } catch (error) {
            alanInstance.playText('Please try again with a valid article number.');
          }
        }
      }
    });
  }, [hasHandledCommand]);

  return (
    <>
      <div className={classes.logoContainer} data-aos="fade-down">
        {newsArticles.length ? (
          <div className={classes.infoContainer} data-aos="fade-up">

            <div className={classes.card}>
              <Typography variant="h5" component="h2">
                Try saying: <br />
                <br />
                Open article number [4]
              </Typography>
            </div>
            <div className={classes.card}>
              <Typography variant="h5" component="h2">
                Try saying: <br />
                <br />
                Go back
              </Typography>
            </div>
          </div>
        ) : null}
        <img
          src={newsimg}
          alt="alan logo"
          style={{
            height: '35vmin',
            width:'70%',
            borderRadius: '20%',
            padding: '0 5%',
            margin: '3% 0',
          }}
          className={classes.alanLogo}
       data-aos='zoom-in' />
      
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />




    </>
  );
}

export default App;
