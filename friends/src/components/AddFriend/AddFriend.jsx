import React, { useState } from "react";

const AddFriend = props => {
  const { onAddFriend } = props;
  const [formInput, setFormInput] = useState({
    name: "",
    age: "",
    email: ""
  });

  const onSubmitForm = event => {
    event.preventDefault();
    const newFriend = {
      name: formInput.name,
      age: Number(formInput.age),
      email: formInput.email
    };

    onAddFriend(newFriend);
    setFormInput({
      name: "",
      age: "",
      email: ""
    });
  };

  const onChangeInput = event => {
    event.persist();
    setFormInput(prevState => {
      let updatedState = { ...prevState };
      updatedState[event.target.name] = event.target.value;
      return updatedState;
    });
  };

  return (
    <div className="add-friend-form">
      <p>Add a new friend:</p>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="name"
          value={formInput.name}
          id="add-name-input"
          placeholder="Name"
          onChange={onChangeInput}
        />
        <input
          type="text"
          name="age"
          value={formInput.age}
          id="add-age-input"
          placeholder="Age"
          onChange={onChangeInput}
        />
        <input
          type="email"
          name="email"
          value={formInput.email}
          id="add-email-input"
          placeholder="Email"
          onChange={onChangeInput}
        />
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
};

export default AddFriend;
