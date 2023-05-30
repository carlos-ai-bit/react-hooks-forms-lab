import React from "react";
// import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit, OnHandleNameChange, onHandleNewCategory, nameInput, categoryInput }) {
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input onChange={OnHandleNameChange} type="text" name="name" value={nameInput} />
      </label>

      <label>
        Category:
        <select onChange={onHandleNewCategory} value={categoryInput} name="category">
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
