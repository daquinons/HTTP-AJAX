import React from "react";

const AddFriend = props => {
  return (
    <div className="add-friend-form">
      <p>Add a new friend:</p>
      <form action="" method="post">
        <input
          type="text"
          name="nameInput"
          id="add-name-input"
          placeholder="Name"
        />
        <input
          type="text"
          name="ageInput"
          id="add-age-input"
          placeholder="Age"
        />
        <input
          type="email"
          name="emailInput"
          id="add-email-input"
          placeholder="Email"
        />
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
};

export default AddFriend;
