import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";

const items = [
  { id: "1", name: "Item 1", description: "Description for Item 1" },
  { id: "2", name: "Item 2", description: "Description for Item 2" },
  { id: "3", name: "Item 3", description: "Description for Item 3" },
];

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ItemList items={items} />
        </Route>
        <Route path="/items/:id">
          <ItemDetail items={items} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
