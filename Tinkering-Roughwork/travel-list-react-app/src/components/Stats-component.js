/**
 * Renders the statistics of the packing list items. * @param {Array} items - The items to calculate statistics from.
 */
export function Stats({ itemsArr }) {
    const numItems = itemsArr.length;
    const numPacked = itemsArr.filter((item) => item.packed).length
    const packedPercentage = Number(Math.round((numPacked / numItems) * (100)))
    if (!numItems) { return (<p className="stats"><em>Start Adding Items To Your List 🚀</em></p>) }
    return (
        <footer className="stats">
            {(packedPercentage === 100) ?
                (<em>You Got Everything! Ready To Go!! ✈️</em>) :
                (<em>{`🧳 You have ${numItems} items on your list, and you already packed ${numPacked} (${packedPercentage}%)`}</em>)
            }
        </footer>
    )
}