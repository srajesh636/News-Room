import config from "../config.json";
import store from "../store/configureStore";

let { url, apiKey, getByKeywordUrl } = config;

const getNews = async (type, search = "") => {
  let category = type === null || type === undefined ? "" : type;
  let endPoint = url + category + "&apiKey=" + apiKey;

  if (search !== "") {
    endPoint = getByKeywordUrl + search + "&apiKey=" + apiKey;
  }

  return fetch(endPoint)
    .then(res => res.json())
    .then(res => {
      store.dispatch({
        type: "TOP_HEADLINES",
        payload: res.articles
      });
    });
};

export default getNews;
