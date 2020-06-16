import React, { useEffect, useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const ConsumerA = () => {
  const globalContext = useContext(GlobalContext);
  const globalState = globalContext.globalstate;

  useEffect(() => {
    console.log("📻 Consumer A: ", globalState);
  }, []);

  return (
    <div className="component consumer">
      <h4>📺 Consumer A</h4>
      <p>Count: {globalState.globals.count}</p>
      <h5>News:</h5>
      <div className="news-list">
        {globalState.news.length ? (
          <div>
            {globalState.news.map((n, i) => (
              <div className="news-listing" key={i}>
                <i>{n.date}</i>
                <p>{n.headline}</p>
              </div>
            ))}
          </div>
        ) : (
          <div>No news</div>
        )}
      </div>
    </div>
  );
};

export default ConsumerA;
