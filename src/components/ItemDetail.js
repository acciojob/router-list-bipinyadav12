import React from "react";
import {
    BrowserRouter as Router,
    
    Link,
    useParams
  } from "react-router";
function ItemDetail() {
    const items = [
        { id: "1", name: "Item 1", description: "Description for Item 1" },
        { id: "2", name: "Item 2", description: "Description for Item 2" },
        { id: "3", name: "Item 3", description: "Description for Item 3" },
      ];
    const { id } = useParams();
    const item = items.find((item) => item.id === id);

    return (
      <div>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
      </div>
    );
  }
  export default ItemDetail
