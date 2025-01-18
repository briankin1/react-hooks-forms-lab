import React from "react";

function Filter({ search, onSearchChange, onCategoryChange }) {
    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={search} // Set the input value to the search prop
                onChange={onSearchChange} // Call the function passed as a prop
            />
            <label>
                Filter by category:
                <select name="category" onChange={onCategoryChange}>
                    <option value="All">All</option>
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Dessert">Dessert</option>
                </select>
            </label>
        </div>
    );
}

export default Filter;