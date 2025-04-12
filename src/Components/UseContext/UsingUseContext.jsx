import React, { useContext } from "react";
import { MyContext } from "../../App";

function UsingUseContext() {
  // Since the useContext function returns the value of the context, you can assign it to a variable you want
  const exampleContext = useContext(MyContext);
  return (
    <div>
      <p>Using the useContext hook: {exampleContext}</p>
    </div>
  );
}

export default UsingUseContext;
//example context can also be an array as well.so when we need a value we can use index to get the value