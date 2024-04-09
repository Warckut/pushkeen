import { useState } from "react";
import "./App.css";

const headerItem =
  "Officia sunt incididunt laborum adipisicing reprehenderit consectetur excepteur";
const paragraphItem =
  "Officia sunt incididunt laborum adipisicing reprehenderit consectetur excepteur cillum non voluptate duis Lorem laborum occaecat. Esse sunt reprehenderit ea culpa anim do fugiat mollit incididunt.";

function App() {
  const [items, setItems] = useState(
    Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      text: paragraphItem,
      header: headerItem,
      isActive: false,
    }))
  );

  function toogleActive(itemId: number) {
    const updatedItems = items.map((v) =>
      v.id === itemId ? { ...v, isActive: !v.isActive } : v
    );
    setItems(updatedItems);
  }

  return (
    <div className="app">
      {items.map(({ id, text, header, isActive }) => (
        <div
          key={id}
          className={`app__item ${isActive ? "active" : ""}`}
          onClick={() => toogleActive(id)}
        >
          <h3>{header}</h3>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
