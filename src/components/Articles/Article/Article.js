import React from 'react';
import PropTypes from 'prop-types';
import classes from './Article.module.css';

const Article = (props) => {
  return (
    <li className={classes.Article}>
      <p className={classes.Title}>{props.title}</p>
      <p className={classes.Author}>{props.author}</p>
      <a
        className={classes.Link}
        href={props.url}
        rel="noopener noreferrer"
        target="_blank"
      >
        Read
      </a>
    </li>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Article;
