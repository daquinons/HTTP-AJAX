import React from "react";

const FriendCard = props => {
  const { friend, onDelete } = props;

  const onClickDelete = () => {
    onDelete(friend);
  }

  return (
    <>
      <li>{friend.name}</li>
      <p>Age: {friend.age}</p>
      <p>Email: {friend.email}</p>
      <span id="delete-button" onClick={onClickDelete}>X</span>
      <hr />
    </>
  );
};

export default FriendCard;
