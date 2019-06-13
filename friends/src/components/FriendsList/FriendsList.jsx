import React from "react";
import PropTypes from "prop-types";
import FriendCard from "../FriendCard/FriendCard";

const FriendsList = ({ friends, onDelete, onClickEdit, onCancelEdit }) => {
  return (
    <ul>
      {friends.map(friend => (
        <div key={friend.id} className="friend-info">
          <FriendCard friend={friend} onDelete={onDelete} onClickEdit={onClickEdit} />
        </div>
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired
    })
  ).isRequired
};

export default FriendsList;
