import { Button } from "./Button-component"
import { useState } from "react";
/**
 * Form for adding a new friend. @param {} props - Component props.
 */
export function FormAddFriend({ addFriendObj }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");
    /**
      * Handles form submission to add a new friend.
      * @param {Event} e - The form submission event.
      */
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) return;

        // Generate a unique ID for the new friend
        const id = crypto.randomUUID();
        //new friend object
        const newFriend = { id, name, image: `${image}?u=${id}`, balance: 0, };

        addFriendObj(newFriend)// Use the addFriend function from props

        setName("");
        setImage("https://i.pravatar.cc/48");
    }

    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>

            <label>👥 Friend Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <label>🌄 Image URL</label>
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />

            <Button>Add</Button>
        </form>
    )
}