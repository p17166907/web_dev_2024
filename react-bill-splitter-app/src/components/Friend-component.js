import { Button } from "./Button-component";

/**
 * Represents a single friend item. @param {{ friendObj: Object, handleSelection: Function, selectedFriendObj: Object }} props - Component props.
 */
export function Friend({ friendObj, handleSelection, selectedFriendObj }) {
    const { id, name, image, balance } = friendObj;
    console.log('Friend, friendObj', typeof friendObj, friendObj);
    console.log('Friend, selectedFriendObj', typeof selectedFriendObj, selectedFriendObj);

    // Check if the current friendObj's id matches the selectedFriendObj's id
    const isSelected = selectedFriendObj && selectedFriendObj.id === friendObj.id;

    /**   * Renders the friend's balance status.   */
    const renderBalanceStatus = () => {
        if (balance === 0) return <p>Balance is {balance}</p>;

        // Determine the text and class for the balance status
        const balanceText = balance < 0 ? `You owe ${name} £${Math.abs(balance)}` : `${name} owes you £${balance}`;
        const balanceClassName = balance < 0 ? "red" : "green";

        return <p className={balanceClassName}>{balanceText}</p>;
    };
    return (
        <li className={(isSelected) ? ("selected") : ("")}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            {renderBalanceStatus()}
            <Button onClickProp={() => handleSelection(friendObj)}> {(isSelected) ? ("Close") : ("Select")} </Button>
        </li>
    )
}