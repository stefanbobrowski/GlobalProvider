import React, { useEffect, useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import ConsumerC from "./ConsumerC";

const ConsumerB = () => {
  const globalContext = useContext(GlobalContext);
  const globalState = globalContext.globalstate;

  useEffect(() => {
    console.log("📻 Consumer B: ", globalState);
  }, []);

  return (
    <div className="component consumer">
      <h4>📺 Consumer B</h4>
      <p>Count: {globalState.globals.count}</p>
      <ConsumerC payload={globalState}></ConsumerC>
    </div>
  );
};

export default ConsumerB;
