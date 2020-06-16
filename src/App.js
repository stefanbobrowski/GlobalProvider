import React, { useEffect, useContext } from "react";
import GlobalContext from "./context/GlobalContext";
import ConsumerA from "./components/ConsumerA";
import ConsumerB from "./components/ConsumerB";
import ProviderA from "./components/ProviderA";
import "./App.scss";

const App = () => {
  const globalContext = useContext(GlobalContext);
  const globalState = globalContext.globalstate;

  useEffect(() => {
    console.log("App render: ", globalContext);
  }, []);

  return (
    <div id="App">
      <main id="view">
        <div className="page home">
          <h1>📡 Global Provider</h1>
          <h5>Built with React Hooks (useContext, useReducer)</h5>
          <p>
            Global Provider is a scalable global state management system. Share
            application state with all components.
          </p>
          <p>What's included:</p>
          <ul>
            <li>A Global State wrapper</li>
            <li>A Global Context provider</li>
            <li>A Global Reducer dispatch</li>
          </ul>
          <p>
            The contrived example below demonstrates a GlobalProvider
            broadcasting it's `count` and `news` items to 3 Consumers and 1
            Provider.
          </p>
          <ol>
            <li>Modify the globalState `count`.</li>
            <li>Add `news` items with the Provider.</li>
            <li>Remove `news` items from the globalState.</li>
          </ol>
          <section className="globals-container">
            <code>
              <pre>
                <p>globalState: {"{"}</p>
                <div className="indent">
                  <p>globals: {"{"}</p>
                  <div className="indent">
                    <p>
                      name: {globalState.globals.name} {}
                    </p>
                    <p>count: {globalState.globals.count} </p>
                  </div>

                  <p>{"}"}</p>
                  <p>news: {"["}</p>
                  <div className="indent">
                    {globalState.news.length ? (
                      <div className="headline">
                        {globalState.news.map((n, i) => (
                          <p key={i}>
                            {"{"} id: {n.id}, headline: "{n.headline}", date:{" "}
                            {n.date}
                            {" }"}{" "}
                            <span
                              className="remove-news-button"
                              onClick={() =>
                                globalContext.globaldispatch({
                                  type: "removeNews",
                                  n,
                                })
                              }
                            >
                              x
                            </span>
                          </p>
                        ))}
                      </div>
                    ) : (
                      <div>No news stories</div>
                    )}
                    <p>{"]"}</p>
                  </div>
                  <p>{"}"}</p>
                </div>
              </pre>
            </code>
            <div>
              Count control: &nbsp;
              <button
                className="int-button"
                onClick={() =>
                  globalContext.globaldispatch({ type: "decrementCount" })
                }
              >
                -
              </button>
              <button
                className="int-button"
                onClick={() =>
                  globalContext.globaldispatch({ type: "incrementCount" })
                }
              >
                +
              </button>
            </div>
          </section>
          <section className="consumers-container">
            <div>
              <ConsumerA></ConsumerA>
              <ConsumerB></ConsumerB>
            </div>
            <div>
              <ProviderA></ProviderA>
            </div>
          </section>
        </div>
      </main>
      <footer>
        <p>&copy; 2020 Stefan Bobrowski</p>
        <p>
          <a href="https://stefanbobrowski.com" target="_blank">
            stefanbobrowski.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
