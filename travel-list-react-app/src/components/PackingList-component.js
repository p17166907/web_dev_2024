import { useState } from "react";
import { Item } from "./Item-component";

/**
 * PackingList renders a list of items, allowing sorting and item management.
 * @param {Array} items - The array of item objects to display.
 * @param {Function} onDeleteItem - The function to call when an item is deleted.
 * @param {Function} onToggleItem - The function to call when an item's status is toggled.
 * @param {Function} setItems - The function to set the state of items.
 */
export function PackingList({ itemsArr, onDelete, setItemsArr, handleToggleItem }) {
    const [sortBy, setSortBy] = useState('input')
    /**
     * Compares two items based on the current sorting criteria.
     * @param {Object} a - The first item to compare.
     * @param {Object} b - The second item to compare.
     * @returns {number} - The result of the comparison for sorting.
     */
    const sortItems = (a, b) => {
        switch (sortBy) {
            case 'description': return a.description.localeCompare(b.description);
            case 'packed': return Number(b.packed) - Number(a.packed);
            default: return 0;
        }
    };
    /**
     * Sorts the items based on the selected sorting criteria.
     * The sorted array is used for rendering the Item components.
     */
    const sortedItems = (sortBy === 'input') ? (itemsArr) : ([...itemsArr].sort(sortItems));

    const handleClearList = () => {
        if (itemsArr.length === 0) return;
        const confirmed = window.confirm("Are you sure you want to clear the list?");
        if (confirmed) setItemsArr([]);
    }

    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => <Item key={item.id} item={item} onDelete={onDelete} handleToggleItem={handleToggleItem} />)}
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