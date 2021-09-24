import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [errands, setErrands] = useState(data);

   const toggleMarkAsDone = (id) => {
     let updatedList = errands.map((item) => {
       if (item.id === id) {
         return { ...item, done: !item.done };
       }
       return item;
     });

     setErrands(updatedList);
   };

  return (
    <main>
      <section className="container">
        <h3>{errands.length} things to-do today</h3>
        <List errands={errands} onToggle={toggleMarkAsDone} />
        <button onClick={() => setErrands([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
