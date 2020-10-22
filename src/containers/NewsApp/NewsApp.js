import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Articles from '../../components/Articles';
import SearchBar from '../../components/SearchBar';
import { fetchTopHeadlines, fetchHeadlinesBySearch } from '../../store/actions';

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
      <button>Prev</button>
      <button>Next</button>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsApp);
