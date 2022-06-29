import React, { useState } from "react";
import { useNavigate } from "react-router";
import './search.css'
const Search = () => {
  const [keyword, setKeyword] = useState("");
  const nav = useNavigate();

  const SearchHandeler = (e) => {
    e.preventDefault()
    if (keyword.trim() && keyword.trim() !== true ) {
      nav(`/search/${keyword}`);
    }
    else {
      nav(`/`);
    }
  };

  return (
    <div className="container">
      <form onSubmit={SearchHandeler} className="form-search">
        <input
          onChange={(e) => setKeyword(e.target.value) }
          className="search"
          type="search"
          placeholder="Search by country name ..."
        />
        <i className="fa fa-search" aria-hidden="true"></i>
      </form>
    </div>
  );
};

export default Search;
