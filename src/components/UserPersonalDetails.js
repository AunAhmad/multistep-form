import React, { useContext } from "react";
import formContext from "../context/formContext";

const UserPersonalDetails = () => {
  const { nextStep, prevStep } = useContext(formContext);
  return (
    <div>
      <label htmlFor="">Occupation</label>
      <input type="text" />
      <button onClick={() => nextStep()}>continue</button>
      <button onClick={() => prevStep()}>back</button>
    </div>
  );
};

export default UserPersonalDetails;
