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
            author={article.author || 'Unknown'}
            description={article.description}
            url={article.url}
            source={article.source}
            searchBySource={props.searchBySource}
          />
        ))}
      </ul>
    );
  }

  return <div className={classes.Articles}>{articles}</div>;
};

Articles.propTypes = {
  articles: PropTypes.array.isRequired,
  searchBySource: PropTypes.func.isRequired,
};

export default Articles;
