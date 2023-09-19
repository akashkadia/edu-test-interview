import React from "react";
import { useNavigate } from "react-router";

const NavigateButton = ({ url = "/", name = "button" }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(url);
  };
  return <button className="button" onClick={handleClick}>{name}</button>;
};

export default NavigateButton;
