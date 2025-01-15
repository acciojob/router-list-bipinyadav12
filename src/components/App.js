
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import ItemDetail from "./ItemDetail";
// Sample data for items
const items = [
  { id: "1", name: "Item 1", description: "Description for Item 1" },
  { id: "2", name: "Item 2", description: "Description for Item 2" },
  { id: "3", name: "Item 3", description: "Description for Item 3" },
];


function ItemList() {
  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h1><Link to={`/items/${item.id}`}>{item.name}</Link></h1> 
          </li>
        ))}
      </ul>
    </div>
  );
}

// Component to display details of a specific item

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component ={ItemList} />
        <Route path="/items/:id" component ={ItemDetail} />
      </Switch>
    </Router>
  );
}

export default App;
