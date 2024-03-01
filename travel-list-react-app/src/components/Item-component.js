/**
 * Renders a single item in the packing list. * @param {Object} item - The item details.
 */
export function Item({ item, onDelete, handleToggleItem }) {
    // console.log('Item Component', item);
    return (
        <li style={item.packed ? { textDecoration: "line-through" } : {}}>
            <input type="checkbox" value={item.packed} onClick={() => handleToggleItem(item.id)} />
            <span>{`${item.quantity} ${item.description}`}</span>
            <span><button onClick={() => onDelete(item.id)}>❌</button></span>
        </li>
    );
}