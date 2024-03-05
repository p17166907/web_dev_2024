import { FriendList } from "./components/FriendList-component";
import { Button } from "./components/Button-component";
import { FormAddFriend } from "./components/FormAddFriend-component"
import { useState } from "react";
import { FormSplitBill } from "./components/FormSplitBill-component";


const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends); // Using initialFriends
  const [selectedFriendObj, setSelectedFriendObj] = useState(null)

  console.log('App, showAddFriend', showAddFriend);

  /**    * Toggles the add friend form display.    */
  const handleShowAddFriend = () => { setShowAddFriend((currentDisplay) => !currentDisplay); };
  /**
   * Adds a new friend object to the list. @param {Object} newFriendObj - The new friend object to add.
   */
  const addFriendObj = (newFriendObj) => { setFriends((currFriendObj) => [...currFriendObj, newFriendObj]) }
  /**
  * Selects or deselects a friend for bill splitting. @param {Object} friendObj - The friend object to select or deselect.
  */
  const handleSelection = (friendObj) => {
    setSelectedFriendObj((currSelected) => currSelected && currSelected.id === friendObj.id ? null : friendObj);
    setShowAddFriend(false)
  }
  /**
  * Handles splitting the bill between the user and selected friend. @param {number} value - The value to adjust the friend's balance by.
  */
  const handleSplitBill = (value) => {
    console.log('App', 'handleSplitBill', value);

    setFriends((friendsObj) => friendsObj.map(friendObj => friendObj.id === selectedFriendObj.id ? { ...friendObj, balance: friendObj.balance + value } : friendObj))
    setSelectedFriendObj(null)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friendsArr={friends} handleSelection={handleSelection} selectedFriendObj={selectedFriendObj} />
        {(showAddFriend) && <FormAddFriend addFriendObj={addFriendObj} />}
        <Button onClickProp={handleShowAddFriend}> {(showAddFriend) ? 'Close' : 'Add Friend'} </Button>
      </div>
      {/* if there is a selected friend then display FormSplitBill */}
      {(selectedFriendObj && <FormSplitBill selectedFriendObj={selectedFriendObj} handleSplitBill={handleSplitBill} />
      )}
    </div>
  );
}

export default App;
