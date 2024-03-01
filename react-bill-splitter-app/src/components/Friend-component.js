import { Button } from "./Button-component";

/**
 * Represents a single friend item. @param {{ friendObj: Object, handleSelection: Function, selectedFriendObj: Object }} props - Component props.
 */
export function Friend({ friendObj }) {
    const { name, image, balance } = friendObj;
    console.log('Friend, friendObj', typeof friendObj, friendObj);

    /**   * Renders the friend's balance status.   */
    const renderBalanceStatus = () => {
        if (balance === 0) return <p>Balance is {balance}</p>;

        // Determine the text and class for the balance status
        const balanceText = balance < 0 ? `You owe ${name} £${Math.abs(balance)}` : `${name} owes you £${balance}`;
        const balanceClassName = balance < 0 ? "red" : "green";

        return <p className={balanceClassName}>{balanceText}</p>;
    };
    return (<li >
        <img src={image} alt={name} />
        <h3>{name}</h3>
        {renderBalanceStatus()}
        <Button >Select</Button>
    </li>)
}