import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 
function Navbar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      onSearch(searchQuery);
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-flex">
        <div className="logo">
          <Link to="/">
            <h5 className="heading">Movie Application</h5>
          </Link>
        </div>
        <div className="search-input">
          <input
            type="text"
            placeholder="Search movies..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Navbar;
