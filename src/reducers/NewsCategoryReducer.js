const newsCategory = (state = {}, action) => {
  switch (action.type) {
    case "TOP_HEADLINES":
      let news = action.payload;
      action.payload.slice(news.length-2,news.len);
      action.payload.splice(news.length - 1,1);
      action.payload.splice(news.length - 1,1);
      return state={ ...state,news:action.payload };

      case "SHOW_SHIMMER":
      return { ...state , showShimmer : action.payload};

      case "CURRENT_CATEGORY":
      return { ...state , currentCategory : action.payload};

    default:
      break;
  }
  return state;
};

export default newsCategory;
