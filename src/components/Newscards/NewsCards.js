import React from 'react'
import NewsCard from './NewsCard/NewsCard'
import {Grid,Grow,Typography} from '@material-ui/core'
import useStyles from './styles.js'

const infoCards = [
    { color:'rgba(255, 255, 255, 0.11)', title: 'Latest News', info:'here you ask about latest news',text: 'Give me the latest news' },
    { color: 'rgba(255, 255, 255, 0.12)', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: 'rgba(255, 255, 255, 0.13)', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: 'rgba(255, 255, 255, 0.14)', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ]

  function NewsCards({ articles, activeArticle }) {
    const classes = useStyles();
  
    if (!articles.length) {
      return (
        <Grow in>
          <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {infoCards.map((infoCard, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index} className={classes.infoCard}>
                <div className={classes.cardContainer}>
                  <div className={classes.card}>
                    <div className={classes.cardFront} style={{ backgroundColor: infoCard.color }}>
                      <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                      {infoCard.info ? (
                        <Typography variant="h6" component="h6">
                          <strong>{infoCard.title.split(' ')[2]}</strong>: <br />
                          {infoCard.info}
                        </Typography>
                      ) : null}
                    </div>
                    <div className={classes.cardBack} style={{ backgroundColor: infoCard.color }}>
                      <Typography variant="h6" component="h6">
                        Try saying: <br /> <i>{infoCard.text}</i>
                      </Typography>
                    </div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grow>
      );
    }
  
    return (
      <Grow in>
        <Grid container className={classes.container} alignItems='stretch' spacing={3}>
          {articles.map((article, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={i} style={{ display: 'flex' }} data-aos="fade-up">
              <NewsCard i={i} activeArticle={activeArticle} article={article} />
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

export default NewsCards
