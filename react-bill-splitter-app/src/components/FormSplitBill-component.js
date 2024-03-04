import { Button } from "./Button-component";

/**
 * Form for splitting a bill. @param {{ selectedFriendObj: Object, handleSplitBill: Function }} props - Component props.
 */
export function FormSplitBill() {

    return (
        <form className="form-split-bill">
            <h2>Split a bill with {'selected friend name'}</h2>

            <label>💰 Bill Value</label>
            <input type="text" />

            <label>🫵🏾 Your expense</label>
            <input type="text" />

            <label> {`👯‍♂️ {friend}'s expense`}</label>
            <input type="text" />

            <label>🤑 Who is paying the bill</label>
            <select  >
                <option value='user' >User</option>
                <option value='friend'>{`selected friend`}</option>
            </select>

            <Button>Split Bill</Button>
        </form>)
}