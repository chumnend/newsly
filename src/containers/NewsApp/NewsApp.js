import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Articles from '../../components/Articles';
import SearchBar from '../../components/SearchBar';
import {
  fetchTopHeadlines,
  fetchHeadlinesBySearch,
  fetchNextPage,
  fetchPrevPage,
} from '../../store/actions';

function NewsApp(props) {
  const { fetchTopHeadlines } = props;

  useEffect(() => {
    fetchTopHeadlines();
  }, [fetchTopHeadlines]);

  return (
    <div>
      <h1>News App</h1>
      <SearchBar makeSearch={props.fetchHeadlinesBySearch} />
      <Articles articles={props.news.articles} />
      {props.news.page > 1 && (
        <button onClick={props.fetchPrevPage}>Prev</button>
      )}
      {props.news.page < props.news.totalPages && (
        <button onClick={props.fetchNextPage}>Next</button>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    news: state.news,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTopHeadlines: () => dispatch(fetchTopHeadlines()),
    fetchHeadlinesBySearch: (search) =>
      dispatch(fetchHeadlinesBySearch(search)),
    fetchNextPage: () => dispatch(fetchNextPage()),
    fetchPrevPage: () => dispatch(fetchPrevPage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsApp);
