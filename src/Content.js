import React from "react"


import ItemList from "./ItemList";

const Content = ({items,handlechange,handledelete}) => {
 

  return (
    <main>
      {(items.length) ? (
        <ItemList 
        items={items}
        handlechange={handlechange}
        handledelete={handledelete}
        />
      ) : (
        <p> YOUR LIST IS EMPTY</p>
      )
      }

    </main>

  )
}

export default Content
