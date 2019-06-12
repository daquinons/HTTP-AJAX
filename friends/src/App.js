import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchFriend from "./components/SearchFriend/SearchFriend";
import AddFriend from "./components/AddFriend/AddFriend";
import FriendsList from "./components/FriendsList/FriendsList";
import "./App.css";

function App() {
  const [friendList, setFriendList] = useState([]);
  const [friendsToDisplay, setFriendsToDisplay] = useState([]);
  const URL = "http://localhost:5000/friends";

  const getFriends = async () => {
    try {
      const friendsData = await axios.get(URL);
      setFriendList(friendsData.data);
      setFriendsToDisplay(friendsData.data);
    } catch (error) {
      console.log(error);
    }
  };

  const AddNewFriend = async friend => {
    try {
      await axios.post(URL, friend);
      await getFriends();
    } catch (error) {
      console.log(error);
    }
  };

  const searchFriend = name => {
    const filteredFriends = friendList.filter(friend =>
      friend.name.toLowerCase().includes(name)
    );
    setFriendsToDisplay(filteredFriends);
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <div className="App">
      <SearchFriend onSearch={searchFriend} />
      <AddFriend />
      <FriendsList friends={friendsToDisplay} />
    </div>
  );
}

export default App;
