import { useState } from "react";
import { Button } from "./Button-component";
/**
 * Form for splitting a bill. @param {{ selectedFriendObj: Object, handleSplitBill: Function }} props - Component props.
 */
export function FormSplitBill({ selectedFriendObj, handleSplitBill }) {
    const [bill, setBill] = useState('')
    const [paidByUser, setpaidByUser] = useState('')
    const paidByFriend = (bill) ? (bill - paidByUser) : ("")
    const [whoIsPaying, setwhoIsPaying] = useState('user')

    /**
     * Capitalizes the first letter of a given string. @param {string} string - The string to capitalize. @returns {string} The string with the first letter capitalized, if provided; otherwise, an empty string.
     */
    const capitalizeFirstLetter = (string) => { if (!string) return ''; return string.charAt(0).toUpperCase() + string.slice(1); };

    /**
    * Handles form submission to split the bill. @param {Event} e - The form submission event.
    */
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!bill || !paidByUser) return;
        handleSplitBill((whoIsPaying === 'user') ? (paidByFriend) : (- paidByUser))
    }

    return (
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>{`Split a bill with ${(selectedFriendObj) ? (selectedFriendObj.name) : 'selected friend'}`}</h2>

            <label>💰 Bill Value</label>
            <input type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))} />

            <label>🫵🏾 Your expense</label>
            <input type="text" value={paidByUser} onChange={(e) => setpaidByUser((Number(e.target.value)) > (bill) ? (paidByUser) : (Number(e.target.value)))} />

            <label> {`👯‍♂️ ${selectedFriendObj ? `${capitalizeFirstLetter(selectedFriendObj.name)}'s` : ''} expense`}</label>
            <input type="text" disabled value={paidByFriend} />

            <label>🤑 Who is paying the bill</label>
            <select value={whoIsPaying} onChange={(e) => setwhoIsPaying(e.target.value)} >
                <option value='user' >You</option>
                <option value='friend'>{`${selectedFriendObj ? capitalizeFirstLetter(selectedFriendObj.name) : 'selected friend'}`}</option>
            </select>

            <Button>Split Bill</Button>
        </form>
    )
}