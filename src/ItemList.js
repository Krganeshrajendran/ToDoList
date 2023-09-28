import React from "react"

import LineItem from "./LineItem";

const ItemList = ({items,handlechange,handledelete}) => {
  return (
    <ul>
          {items.map((item) => (
            <LineItem
            item={item}
            key={item.id}
            handlechange={handlechange}
            handledelete={handledelete}
            />
          ))}
        </ul>
  )
}

export default ItemList