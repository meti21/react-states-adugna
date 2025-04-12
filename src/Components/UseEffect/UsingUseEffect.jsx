import React, { useState, useEffect } from "react";
import "./effects.css";

function UsingUseEffect() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(45);

  /*  -This code runs every time 'count' or 'age' changes
      -It updates the document title with the current count
      - [count, age] is the DEPENDENCY ARRAY: tells React when to re-run this effect
            - If we use [] => runs only once after the first render
            -If we use [count] => runs when 'count' changes
            -If we use [age] => runs when 'age' changes
            -If we use [count, age] => runs when either 'count' or 'age' changes */
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count, age]);

  return (
    <div>
      <div className="valueHolder">
        <h3>The value of count is: {count}</h3>
      </div>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </div>
  );
}

export default UsingUseEffect;
