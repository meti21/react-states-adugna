// Use rfce snippet to create a functional component
// The ES7 React Snippet lets you do that (Install extension first)
import React, { useState } from "react";

//
function CounterUsingHooksUseState() {
  // 1. useState(0)
  //    -instead of counter and setcount, we can use any name 
  //    -This line sets up a state variable called 'count' and a function to update it called 'setCount'.
  //    -The '0' is the initial value.
  //    -So after this line, React gives you:
  //    - count = 0 (initially)
  //    - setCount is a function you can call to update 'count'.
  const [count, setCount] = useState(0);

  // 2. setCount(count + 1)
   //!  -the function is called EXCUTOR function
  //    -When the button is clicked, the function inside 'onClick' runs.
  //    -'count + 1' evaluates to whatever the current count is, plus one.
  //    -'setCount' then tells React to update the value of 'count' to this new number.
  //    - React will re-render the component with the new value.

  // 3. Count: {count}
  //    -This part displays the current count value on the button.
  //    -Every time 'setCount' is called and the value changes, the component re-renders,
  //    -so this '{count}' always shows the latest number.

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

export default CounterUsingHooksUseState;
