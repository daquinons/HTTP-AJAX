import React from "react";
import PropTypes from "prop-types";

const FriendsList = ({ friends }) => {
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

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired
  })).isRequired
}


export default FriendsList;
