import { useState } from "react";

import { Item } from "./Item-component";
export function PackingList({ itemsArr, onDelete, setItemsArr, handleToggleItem }) {
    const [sortBy, setSortBy] = useState('input')

    const handleClearList = () => {
        if (itemsArr.length === 0) return;
        const confirmed = window.confirm("Are you sure you want to clear the list?");
        if (confirmed) setItemsArr([]);
    }

    return (
        <div className="list">
            <ul>
                {itemsArr.map((item) => <Item key={item.id} item={item} onDelete={onDelete} handleToggleItem={handleToggleItem} />)}
            </ul>

            <div className="actions" >
                <label htmlFor="sort-by">Sort By:</label>
                <select id="sort-by" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Input Order</option>
                    <option value="description">Description</option>
                    <option value="packed">Packed Status</option>
                </select>
                <button onClick={handleClearList}>Clear List</button>
            </div>
        </div>
    );
}