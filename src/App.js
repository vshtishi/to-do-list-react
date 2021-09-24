import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [errands, setErrands] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{errands.length} things to-do today</h3>
        <List errands={errands} />
        <button onClick={() => setErrands([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
