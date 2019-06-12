import React from "react";

const FriendsList = props => {
  const { friends } = props;
  return (
    <ul>
      {friends.map(friend => (
        <div key={friend.id} className="friend-info">
          <li>{friend.name}</li>
          <p>Age: {friend.age}</p>
          <p>Email: {friend.email}</p>
          <hr />
        </div>
        
      ))}
    </ul>
  );
};

export default FriendsList;
