import React from "react";

const Dropdown = ({ handleChange, options, lable }) => {
  return (
    <>
      <label>{lable}</label>
      <select onChange={handleChange}>
        <option value=""></option>
        {options?.map((itm) => {
          return (
            <option value={itm} key={itm}>
              {itm}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Dropdown;
