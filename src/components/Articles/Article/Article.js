import React from 'react';
import PropTypes from 'prop-types';

function Article(props) {
  return (
    <li>
      <p>
        <strong>{props.title}</strong>
      </p>
      <p>
        <strong>{props.author}</strong>
      </p>
      <a href={props.url} rel="noopener noreferrer" target="_blank">
        Link
      </a>
    </li>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Article;
