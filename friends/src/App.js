import React, { useState, useEffect } from "react";
import axios from "axios";
import FriendsList from "./components/FriendsList/FriendsList";
import "./App.css";

function App() {
  const [friendList, setFriendList] = useState([]);

  const getFriends = async () => {
    const url = "http://localhost:5000/friends";
    const friendsData = await axios.get(url);
    setFriendList(friendsData.data);
  };

  useEffect(() => {
    getFriends();
  }, []);
  
  return (
    <div className="App">
      <FriendsList friends={friendList} />
    </div>
  );
}

export default App;
