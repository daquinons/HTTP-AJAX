import React from "react";

const SearchFriend = props => {
  const { onSearch } = props;

  return (
    <input
      type="search"
      name="searchInput"
      id="search-input"
      placeholder="Search for a friend"
      onChange={onSearch}
    />
  );
};

export default SearchFriend;
