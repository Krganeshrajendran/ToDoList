import React from "react"

const Footer = ({length}) => {
    
  return (
    <footer>
    {length} LIST OF  {length===1 ?"item":"ITEMS" }
    </footer>
  )
}

export default Footer