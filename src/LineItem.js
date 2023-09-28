import React from "react"
import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({item,handlechange,handledelete}) => {
  return (
    <li className="item" >
              <input
                type="checkbox"
                onChange={() => handlechange(item.id)}
                checked={item.checked}
              />
              <label
                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                onDoubleClick={() => handlechange(item.id)}>{item.item}</label>
              <FaTrashAlt
                onClick={() => handledelete(item.id)}
                role="button" />
            </li>
  )
}

export default LineItem