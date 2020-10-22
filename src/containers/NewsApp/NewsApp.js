import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTopHeadlines } from '../../store/actions';

const NewsApp = (props) => {
  const { fetchTopHeadlines } = props;

  useEffect(() => {
    fetchTopHeadlines();
  }, [fetchTopHeadlines]);

  return (
    <div>
      <h1>News App</h1>
      <div>
        <label htmlFor="search">Search</label>
        <input id="search" type="search" />
        <button>Search</button>
      </div>
      <ul>
        {props.news.articles.map((article) => (
          <li key={article.url}>
            {article.title} - {article.author}
          </li>
        ))}
      </ul>
      <button>Prev</button>
      <button>Next</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    news: state.news,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTopHeadlines: () => dispatch(fetchTopHeadlines()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsApp);
