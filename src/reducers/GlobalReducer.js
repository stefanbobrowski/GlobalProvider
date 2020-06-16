const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "incrementCount":
      return {
        ...state,
        globals: { ...state.globals, count: state.globals.count + 1 },
      };
    case "decrementCount":
      return {
        ...state,
        globals: { ...state.globals, count: state.globals.count - 1 },
      };

    case "submitNews":
      return {
        ...state,
        news: [...state.news, action.newsObj],
      };

    case "removeNews":
      console.log("Removing: ", action.n);
      return {
        ...state,
        news: state.news.filter((x) => x.id !== action.n.id),
      };

    default:
      return state;
  }
};

export default GlobalReducer;
