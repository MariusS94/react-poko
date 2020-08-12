import React from "react";
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListItemIcon from "./components/ListItemIcon";
import bisasam from "./images/bisasam.png";
import ListItemText from "./components/ListItemText";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        Pokedexs
        <input placeholder="Search" className="header__input" />
      </header>
      <main className="app__main">
        <List>
          <ListItem href="#">
            <ListItemIcon image={bisasam} />
            <ListItemText primary="Bisasam" secondary="#002" />
            <ListItemIcon image="https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/fire.svg" />
          </ListItem>
        </List>
      </main>
      <footer className="app__footer">Placeholder</footer>
    </div>
  );
}

export default App;
