import React from 'react';

import { Search } from '@mui/icons-material';

function SearchInput() {
  return (
    <div className="search-input">
      <input type="text" placeholder="Enter your keyword" />
      <button>
        <Search />
      </button>
    </div>
  );
}

export default SearchInput;
