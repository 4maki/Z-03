import React from "react";

export default function AddNewUser({ name, years, onNameChange, onYearsChange, onSubmit }) {
    return (
      <form onSubmit={onSubmit}>
        <label>
          Ime:
          <input
            type="text"
            value={name}
            onChange={onNameChange}
          />
        </label>
        <br />
        <label>
          Dob:
          <input
            type="text"
            value={years}
            onChange={onYearsChange}
          />
        </label>
        <br />
        <button type="submit">Dodaj korisnika</button>
      </form>
    );
  }