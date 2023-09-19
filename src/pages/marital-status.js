import React from "react";
import Dropdown from "../component/Dropdown";
import { useDispatch } from "react-redux";
import { maritalSelection } from "../store/genederSlice";
import NavigateButton from "../component/NavigateButton";
const arr = ["married", "unmarride"];
const MaritalStatus = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(maritalSelection(e.target.value));
  };
  return (
    <>
      <Dropdown options={arr} handleChange={handleChange} />
      <NavigateButton url="/input-field"/>
    </>
  );
};

export default MaritalStatus;
