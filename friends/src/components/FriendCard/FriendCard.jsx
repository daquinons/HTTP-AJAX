import React from "react";

const FriendCard = props => {
  const { friend, onDelete, onClickEdit } = props;

  const onClickDelete = (event) => {
    event.stopPropagation();
    onDelete(friend);
  };

  const onClickUpdate = () => {
    onClickEdit(friend);
  }

  return (
    <div className="friend-card" onClick={onClickUpdate}>
      <li>{friend.name}</li>
      <p>Age: {friend.age}</p>
      <p>Email: {friend.email}</p>
      <span id="delete-button" onClick={onClickDelete}>
        X
      </span>
      <hr />
    </div>
  );
};

export default FriendCard;
