import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react"
import Additem from "./Additem";
import Searchitem from "./Searchitem";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('todo_list')));
  const [newItem,setNewItem]=useState('')
  const [search,setSearch]=useState('')

  const addItem =(item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem ={id,checked:false,item}  
    const listItems =[...items,addNewItem]
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))   

  }

  const handlechange = (id) => {
    const listitems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listitems)
    localStorage.setItem("todo_list", JSON.stringify(listitems))
  }

  const handledelete = (id) => {
    const listitems = items.filter((item) => item.id !== id)
    setItems(listitems)
    localStorage.setItem("todo_list", JSON.stringify(listitems))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return;
    console.log(newItem)
    addItem(newItem)
    setNewItem('')
  }

  
  return (
    <div>
      <Header />
      <Additem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Searchitem
        search={search}
        setSearch={setSearch}
      />
      <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handlechange={handlechange}
        handledelete={handledelete}
        />
      <Footer
        length={items.length}
      />
    </div>
  );
}
export default App;