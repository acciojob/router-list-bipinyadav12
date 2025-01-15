// Import necessary dependencies
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

// Sample data for items
const items = [
  { id: "1", name: "Item 1", description: "Description for Item 1" },
  { id: "2", name: "Item 2", description: "Description for Item 2" },
  { id: "3", name: "Item 3", description: "Description for Item 3" },
];

// Component to display the list of items
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
function ItemDetail() {
  const { id } = useParams();
  const item = items.find((item) => item.id === id);

  if (!item) {
    return <h2>Item not found</h2>;
  }

  return (
    <div>
      <h1>{item.name}</h1>
       <p>{item.description}</p>
      <Link to="/">Back to Item List</Link>
    </div>
  );
}

// Main App component
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
