import React, { useReducer } from "react";
import GlobalContext from "./context/GlobalContext";
import globalReducer from "./reducers/GlobalReducer";

const GlobalProvider = (props) => {
  const globalStateInit = {
    globals: {
      name: "Global Provider",
      count: 0,
    },
    news: [
      { id: 0, headline: "Cure for virus found", date: "5/15/2020" },
      {
        id: 1,
        headline: "Protests stop as reforms are made",
        date: "5/20/2020",
      },
      {
        id: 2,
        headline:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "5/22/2020",
      },
    ],
  };

  const [globalState, globalDispatch] = useReducer(
    globalReducer,
    globalStateInit
  );

  return (
    <GlobalContext.Provider
      value={{ globalstate: globalState, globaldispatch: globalDispatch }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
