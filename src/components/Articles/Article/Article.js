import React from 'react';
import PropTypes from 'prop-types';

function Article(props) {
  return (
    <li>
      {props.title} - {props.author}
    </li>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Article;
