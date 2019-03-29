import appInfo from '../../app.json';
export const GET_NEWS = 'NEWS';
export const GET_NEWS_SUCCESS = 'NEWS_SUCCESS';
export const GET_NEWS_FAIL = 'NEWS_FAIL';

export default function reducer(state = { news: [] }, action) {
  switch (action.type) {
    case GET_NEWS:
      return { ...state, loading: true };
    case GET_NEWS_SUCCESS:
      return { ...state, loading: false, news: action.payload.data };
    case GET_NEWS_FAIL:
      return {
        ...state,
        loading: false,
        error: JSON.stringify(action.response)
      };
    default:
      console.log("DEFAULT: "+JSON.stringify(state));
      return state;
  }
}

export function showNews(topic, fromDate, sort="popularity", apiKey=appInfo.newsApiKey) {
    return {
        type: GET_NEWS,
        payload: {
        request: {
            url: "/v2/everything?"+
            "q="+topic+"&"+
            "from="+fromDate+"&"+
            "sortBy="+sort+"&"+
            "apiKey="+apiKey
        },

        }
  };
}