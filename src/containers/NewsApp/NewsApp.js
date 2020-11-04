import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Articles from '../../components/Articles';
import SearchBar from '../../components/SearchBar';
import {
  fetchTopHeadlines,
  fetchHeadlinesBySearch,
  fetchNextPage,
  fetchPrevPage,
} from '../../store/actions';
import classes from './NewsApp.module.css';

const NewsApp = () => {
  const news = useSelector((state) => {
    return state.news;
  });

  const dispatch = useDispatch();
  const onInit = useCallback(() => dispatch(fetchTopHeadlines()), [dispatch]);
  const onSearch = useCallback(
    (search) => dispatch(fetchHeadlinesBySearch(search)),
    [dispatch],
  );
  const onNextPage = useCallback(() => dispatch(fetchNextPage()), [dispatch]);
  const onPrevPage = useCallback(() => dispatch(fetchPrevPage()), [dispatch]);

  useEffect(() => {
    onInit();
  }, [onInit]);

  return (
    <div className={classes.NewsApp}>
      <div className={classes.Banner}>
        <h1>Newsly</h1>
        <h3>Finding news stories for you!</h3>
      </div>
      <SearchBar makeSearch={onSearch} />
      <Articles articles={news.articles} />
      <div className={classes.Options}>
        <button
          className={classes.OptionButton}
          onClick={onPrevPage}
          disabled={news.page === 1}
        >
          Previous
        </button>
        <button
          className={classes.OptionButton}
          onClick={onNextPage}
          disabled={news.page === news.totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NewsApp;
