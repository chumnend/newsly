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

const NewsApp = () => {
  const news = useSelector((state) => {
    return state.news;
  });

  const dispatch = useDispatch();
  const onInit = useCallback(() => dispatch(fetchTopHeadlines()), [dispatch]);
  const onSearch = (search) => dispatch(fetchHeadlinesBySearch(search));
  const onNextPage = () => dispatch(fetchNextPage());
  const onPrevPage = () => dispatch(fetchPrevPage());

  useEffect(() => {
    onInit();
  }, [onInit]);

  return (
    <div>
      <h1>Newsly</h1>
      <SearchBar makeSearch={onSearch} />
      <Articles articles={news.articles} />
      {news.page > 1 && <button onClick={onPrevPage}>Prev</button>}
      {news.page < news.totalPages && (
        <button onClick={onNextPage}>Next</button>
      )}
    </div>
  );
};

export default NewsApp;
