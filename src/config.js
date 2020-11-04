const URL = process.env.REACT_APP_API_PREFIX;
const KEY = process.env.REACT_APP_API_KEY;

export const PAGE_SIZE = 10;

export const urls = {
  topHeadlines: `${URL}/v2/top-headlines?apiKey=${KEY}&country=us&pageSize=${PAGE_SIZE}`,
  everything: `${URL}/v2/everything?apiKey=${KEY}&pageSize=${PAGE_SIZE}`,
};
