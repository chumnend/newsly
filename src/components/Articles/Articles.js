import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

function Articles(props) {
  if (props.articles.length === 0) {
    return <div>Sorry, nothing was found.</div>;
  } else {
    return (
      <ul>
        {props.articles.map((article) => (
          <Article
            key={article.url}
            title={article.title}
            author={article.author ? article.author : 'Unknown'}
          />
        ))}
      </ul>
    );
  }
}

Articles.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default Articles;
