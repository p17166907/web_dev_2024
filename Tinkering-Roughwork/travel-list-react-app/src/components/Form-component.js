import { useState } from "react";

export function Form({ onAddItems, itemsArr }) {
    // Options for the quantity select dropdown [1, 2, 3, 4, ..., 19, 20]
    const options = Array.from({ length: 20 }, (_, i) => i + 1);

    // State for the description and quantity of the new item
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);

    /**
     * Adds a new item to the list of item objects.   * @param {Event} e - The form submission event.
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description) return;
        const newItem = { id: Date.now(), description, quantity, packed: false }; // Item object to be added to the uplifted state itemsArr
        onAddItems(newItem);
        setDescription('');
        setQuantity(1);
    };

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip 😍?</h3>
            <select onChange={(e) => setQuantity(Number(e.target.value))} value={quantity}>
                {options.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
            <input type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)} />
            <button type="submit">Add</button>
        </form>)
}