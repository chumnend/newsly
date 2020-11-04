import React from 'react';
import PropTypes from 'prop-types';
import classes from './Article.module.css';

const Article = (props) => {
  const handleSearch = () => {
    if (props.source.id) {
      props.searchBySource(props.source.id);
    } else {
      alert('Unable to search this source');
    }
  };

  return (
    <li className={classes.Article}>
      <p className={classes.Title}>{props.title}</p>
      <p className={classes.Author}>{props.author}</p>
      <p className={classes.Description}>{props.description}</p>
      <div className={classes.Options}>
        {props.source ? (
          <button className={classes.Source} onClick={handleSearch}>
            {props.source.name}
          </button>
        ) : (
          <p>No source found.</p>
        )}
        <a
          className={classes.Link}
          href={props.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          See Full Article
        </a>
      </div>
    </li>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  source: PropTypes.object,
  searchBySource: PropTypes.func.isRequired,
};

export default Article;
