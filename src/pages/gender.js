import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { genderSelection } from "../store/genederSlice";
import NavigateButton from "../component/NavigateButton";
import Dropdown from "../component/Dropdown";
const arr = ["male", "female", "other"];
const Gender = () => {
  const dispatch = useDispatch();
  const [navigateUrl,setNavigateUrl]=useState("")
  const onGenderChange = (e) => {
    const genderValue=e.target.value
    dispatch(genderSelection(genderValue));
    if(genderValue==="male"){
      setNavigateUrl("/input-field")
    }else{
      setNavigateUrl("/marital-status")
    }
  };
  return (
    <div className="main">
      <Dropdown handleChange={onGenderChange} options={arr} lable={"Please select gender"} />
      <NavigateButton url={navigateUrl} />
    </div>
  );
};

export default Gender;
