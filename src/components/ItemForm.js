import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
    const [itemName, setItemName] = useState("");
    const [itemCategory, setItemCategory] = useState("Produce");

    function handleSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const newItem = {
            id: uuid(), // Generate a unique id
            name: itemName,
            category: itemCategory,
        };

        onItemFormSubmit(newItem); // Pass the new item to the parent component
        setItemName(""); // Clear the input field
        setItemCategory("Produce"); // Reset category to default
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    required=""
                    type="text"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)} // Update item name state
                />
            </label>
            <label>
                Category:
                <select
                    value={itemCategory}
                    onChange={(e) => setItemCategory(e.target.value)} // Update item category state
                >
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Dessert">Dessert</option>
                </select>
            </label>
            <button type="submit">Add to List</button>
        </form>
    );
}

export default ItemForm;