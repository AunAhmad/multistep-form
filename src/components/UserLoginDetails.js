import React, { useContext } from "react";
import formContext from "../context/formContext";

const UserLoginDetails = () => {
  const { nextStep } = useContext(formContext);
  return (
    <>
      <label htmlFor="">name</label>
      <input type="text" />
      <button onClick={() => nextStep()}>continue</button>
    </>
  );
};

export default UserLoginDetails;
