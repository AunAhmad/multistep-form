import React, { useContext } from "react";
import formContext from "../context/formContext";

const Confirm = () => {
  const { prevStep, nextStep } = useContext(formContext);
  return (
    <div>
      <h5>Confirm</h5>
      <button onClick={() => nextStep()}>continue</button>
      <button onClick={() => prevStep()}>back</button>
    </div>
  );
};

export default Confirm;
