import React from 'react';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import { IoSearch } from 'react-icons/io5';

const header = () => {
  return (
    <div>
      <div>
        <div>
          <IoSearch size="2em" />
          <input type="text" id="search-input" placeholder="Search" />
        </div>
        <ul id="autocomplete-results"></ul>
      </div>
      <button id="theme-toggle-button" aria-label="Toggle theme">
        <span id="sun-icon">
          <IoSunnyOutline />
        </span>
        <span id="moon-icon">
          <IoMoonOutline color="#ffffff" />
        </span>
      </button>
    </div>
  );
};

export default header;
