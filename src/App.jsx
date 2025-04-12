import React from "react";
import "./App.css";

// Class Based State Example
import ClassStateExample from "./Components/ClassStateExample/ClassStateExample";

// Counter using class
import CounterUsingClassState from "./Components/ClassStateExample/CounterUsingClassState";

// Life cycle with Class States
import UsingClassLifeCycleComponent from "./Components/ClassStateExample/UsingClassLifeCycleComponent";

// Counter using useState
import CounterUsingHooksUseState from "./Components/UseState/CounterUsingHooksUseState";

// useState callback example
import CounterIncrementDecrement from "./Components/UseState/CounterIncrementDecrement";

// useEffect
import UsingUseEffect from "./Components/UseEffect/UsingUseEffect";

// Context API with out hooks
import Component1 from "./Components/UseContext/Component1";

// useContext
import UsingUseContext from "./Components/UseContext/UsingUseContext";

// First create context(this step is the same for both context API and useContext)
export const MyContext = React.createContext();

function App() {
  return (
    <div className="App">
      <h2>1.React class State</h2>

      <h4>Counter Using Class State</h4>
      <CounterUsingClassState />

      <h4>Using Class Life Cycle Component</h4>
      <UsingClassLifeCycleComponent />

      <h4>Counter Using Hooks UseState</h4>
      <CounterUsingHooksUseState />

      <h2>2.React Hooks</h2>

      <h4>Counter IncrementDecrement using Hooks useState</h4>
      <CounterIncrementDecrement />

      <h4>Using UseEffect</h4>
      <p>
        useState substitute state and useEffect substitute the life cycle method
      </p>
      <UsingUseEffect />

      <h4>Using context Api and useContext</h4>
      <div className="App">
        <MyContext.Provider value={"The data you want to pass"}>
            <Component1 />
        </MyContext.Provider>
      </div>
    </div>
  );
}

//i.e use effect and life cycle component has counter as a title

//*this step is the same for  context API and useContext
// function App() {
//   return (
//     <div className="App">
//       <MyContext.Provider value={"The data you want to pass"}>
//         <Component1 />
//       </MyContext.Provider>
//     </div>
//   );
// }

export default App;
