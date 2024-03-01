import { FriendList } from "./components/FriendList-component";
import { Button } from "./components/Button-component";
import { FormAddFriend } from "./components/FormAddFriend-component"
import { useState } from "react";


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
  console.log('App, showAddFriend', showAddFriend);

  /**    * Toggles the add friend form display.    */
  const handleShowAddFriend = () => { setShowAddFriend((currentDisplay) => !currentDisplay); };


  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friendsArr={initialFriends} />
        {(showAddFriend) && <FormAddFriend />}
        <Button onClickProp={handleShowAddFriend}> {(showAddFriend) ? 'Close' : 'Add Friend'} </Button>
      </div>


    </div>
  );
}

export default App;
