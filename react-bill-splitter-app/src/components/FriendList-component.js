import { Friend } from "./Friend-component";

/**
 * Displays a list of friends. @param {{ friends: Array, handleSelection: Function, selectedFriendObj: Object }} props - Component props.
 */
export function FriendList({ friendsArr, handleSelection, selectedFriendObj }) {
    return (<ul>  {friendsArr.map((friendObj) => (<Friend friendObj={friendObj} key={friendObj.id} handleSelection={handleSelection} selectedFriendObj={selectedFriendObj} />))}  </ul>);
}