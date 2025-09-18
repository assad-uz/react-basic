import React from "react";
import Second from "./Second";

const App = () => {
  const a = "World";
  function name() {
    const b = "Shaon";
    return `Assaduzzaman ${b}`;
  }
  return (
    <div>
      <div>
        <h1>Hello {a}</h1>
      </div>
      <div>
        <h1>{name()}</h1>
      </div>
      <div>
        <Second/>
      </div>
    </div>
    
  );
};

export default App;
