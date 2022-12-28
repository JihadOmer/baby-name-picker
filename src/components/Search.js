import React from "react";

const Search = ({ props }) => {
  const handleSearchEntry = () => {
    const val = props
    console.log(val);
  };

  

  return (
    <header>
      <form>
        <input
          type="text"
          placeholder="Type to filter"
        
          onChange={handleSearchEntry}
        />
      </form>
    </header>
  );
};

export default Search;
