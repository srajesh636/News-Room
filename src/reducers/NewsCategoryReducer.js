const newsCategory = (state = {}, action) => {
  switch (action.type) {
    case "TOP_HEADLINES":
      return state={ ...state,news:action.payload };
    default:
      break;
  }
  return state;
};

export default newsCategory;
