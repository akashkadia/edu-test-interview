import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavigateButton from "../component/NavigateButton";
const DetailsComponent = ({data}) => {
  return (
    <div>
      <div>
        <span>
          <b>Gender:</b> {data?.gender}
        </span>
      </div>
      {data?.gender !== "male" && (
        <div>
          <span>
            <b>Marital Status:</b> {data?.maritalStatus}
          </span>
        </div>
      )}
       <div>
          <span>
            <b>{data?.relation} Name:</b> {data?.name}
          </span>
        </div>
    </div>
  );
};
const InputField = () => {
  const state = useSelector((state) => state.gender);
  const [relation, setRelation] = useState();
  const [openDetail, setOpenDetails] = useState(false);
  const [name,setName]=useState()
  useEffect(() => {
    if (state?.gender === "male") {
      setRelation("Father");
    } else {
      if (state?.maritalStatus === "married") {
        setRelation("Husband");
      } else {
        setRelation("Father");
      }
    }
  }, [state]);
  const handleChange = (e) => {setName(e.target.value)};
  return (
    <div className="main">
      <label>{`Please Enter your ${relation} Name`}</label>
      <input type="text" onChange={handleChange} />
      <button onClick={() => setOpenDetails(true)}>Show Details</button>
      {openDetail ? (
        <DetailsComponent
          data={{
            gender: state?.gender,
            maritalStatus: state?.maritalStatus,
            relation,
            name
          }}
        />
      ) : (
        ""
      )}
      
      <NavigateButton url="/" name={"Back To Home"}/>
    </div>
  );
};

export default InputField;
