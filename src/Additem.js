import React from "react"
import { FaPlus } from "react-icons/fa"

const Additem = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input
            autoFocus
            id="additem" 
            type="text"
            placeholder="Add Item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            required
        />
        <button 
            type="submit"
            aria-label="add item"
        >
            <FaPlus />
        </button>

    </form>
  )
}

export default Additem