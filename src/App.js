import React from "react";
import "./App.css";
import List from "./components/list";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h2>Pokodex</h2>
        <input placeholder="Search" />
      </header>
      <main className="app__main">
        <List>Dies ist ein Children von List</List>
      </main>
      <footer className="app_footer">
        <p>smth</p>
      </footer>
    </div>
  );
}

export default App;
