import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import classes from './Articles.module.css';

const Articles = (props) => {
  let articles = null;
  if (props.articles.length === 0) {
    articles = <p className={classes.Message}>Sorry, nothing was found.</p>;
  } else {
    articles = (
      <ul className={classes.List}>
        {props.articles.map((article) => (
          <Article
            key={article.url}
            title={article.title}
            author={article.author ? article.author : 'Unknown'}
            url={article.url}
          />
        ))}
      </ul>
    );
  }

  return <div className={classes.Articles}>{articles}</div>;
};

Articles.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default Articles;
