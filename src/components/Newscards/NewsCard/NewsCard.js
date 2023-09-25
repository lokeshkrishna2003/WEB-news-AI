import React, { useEffect, useRef } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardActions,
} from '@material-ui/core';
import useStyles from './style';
import classNames from 'classnames';

function NewsCard({
  i,
  activeArticle,
  article: { description, publishedAt, source, title, url, urlToImage },
}) {
  const classes = useStyles();
  const cardRef = useRef(null);

  useEffect(() => {
      console.log(`Card ${i} - Active Article: ${activeArticle}`);
    if (i === activeArticle && cardRef.current) {
      cardRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [i, activeArticle]);

  return (
    <Card key={i}
      ref={cardRef}
      className={classNames(classes.card, activeArticle === i ? classes.activeCard : null)}
    >
      <CardActionArea href={url} target="__blank">
        <CardMedia
          className={classes.media}
          image={urlToImage || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTop8Vwo5Ux-5G3RWE6bCqMIS_rq49zhlIEDE0FtfFL&s'}
        />
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {(new Date(publishedAt)).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5">
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">
          Learn more
        </Button>
        <Typography variant="h5" color="textSecondary">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default NewsCard;
