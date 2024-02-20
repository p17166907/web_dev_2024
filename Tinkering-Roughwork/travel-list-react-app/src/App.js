import { useState } from 'react';
import './index.css';
import { Logo } from './components/Logo-component'
import { Form } from './components/Form-component'
import { PackingList } from './components/PackingList-component';

function App() {
  const [itemsArr, setItemsArr] = useState([])
  /**
  * Adds a new item to the list of items.   * @param {Object} item - The new item to add.
  */
  const handleAddItems = (item) => { setItemsArr((currentItems) => [...currentItems, item]) }

  /**
   * Deletes an item from the list of items.   * @param {number} id - The id of the item to remove.
   */
  function handleDeleteItem(id) { setItemsArr((currentItems) => currentItems.filter(item => item.id !== id)); }

  /**
   * Toggles the 'packed' status of an item.   * @param {number} id - The id of the item to toggle.
   */
  function handleToggleItem(id) { setItemsArr((currentItems) => currentItems.map((item) => item.id === id ? { ...item, packed: !item.packed } : item)); }

  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems} itemsArr={itemsArr} />
      <PackingList itemsArr={itemsArr} onDelete={handleDeleteItem} setItemsArr={setItemsArr} handleToggleItem={handleToggleItem} />
    </>
  );
}

export default App;
