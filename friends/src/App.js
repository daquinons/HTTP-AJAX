import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchFriend from "./components/SearchFriend/SearchFriend";
import AddFriend from "./components/AddFriend/AddFriend";
import FriendsList from "./components/FriendsList/FriendsList";
import "./App.css";

function App() {
  const [friendList, setFriendList] = useState([]);
  const [friendsToDisplay, setFriendsToDisplay] = useState([]);

  const getFriends = async () => {
    const url = "http://localhost:5000/friends";
    const friendsData = await axios.get(url);
    setFriendList(friendsData.data);
    setFriendsToDisplay(friendsData.data);
  };

  const onSearchFriend = (event) => {
    const inputForm = event.target.value.toLowerCase();
    const filteredFriends = friendList.filter(friend => friend.name.toLowerCase().includes(inputForm));
    setFriendsToDisplay(filteredFriends);
  }

  useEffect(() => {
    getFriends();
  }, []);
  
  return (
    <div className="App">
      <SearchFriend onSearch={onSearchFriend} />
      <AddFriend />
      <FriendsList friends={friendsToDisplay} />
    </div>
  );
}

export default App;
