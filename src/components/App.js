import {useState} from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];


export default function App() {

    const [items, setItem] = useState(initialItems)

    function handleClearItems() {
        const confirmed = window.confirm('Are you sure you want to delete all item ?')
        if (confirmed) setItem(() => [])
    }


    function handleAddItems(item) {
        setItem(items => [...items, item])
    }

    function handleDeleteItem(id) {
        setItem(items => items.filter(item => item.id !== id))
    }

    function handleToogleItem(id) {
        setItem(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item))
        console.log(items)
    }

    return (<div className="app">
            <Logo/>
            <Form onAddItem={handleAddItems}/>
            <PackingList handleClearItems={handleClearItems} onToogleItem={handleToogleItem}
                         onDeleteItem={handleDeleteItem} items={items}/>
            <Stats items={items}/>
        </div>
    )
};







