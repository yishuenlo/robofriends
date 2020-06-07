import React from 'react';
import '../containers/App.css';

//use destructuring to grab prop searchChange
//instead of props and props.searchChange
const SearchBar = ({searchChange}) => {
    return (
        <div>
            <input 
            type="search" 
            placeholder="search robots" 
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBar;