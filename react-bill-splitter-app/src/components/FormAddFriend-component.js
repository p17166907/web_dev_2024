import { Button } from "./Button-component"
/**
 * Form for adding a new friend. @param {} props - Component props.
 */
export function FormAddFriend() {
    return (
        <form className="form-add-friend">

            <label>👥 Friend Name</label>
            <input type="text" />

            <label>🌄 Image URL</label>
            <input type="text" />

            <Button>Add</Button>
        </form>
    )
}