import React, { useContext } from "react";
import formContext from "../context/formContext";
import UserLoginDetails from "./UserLoginDetails";
import UserPersonalDetails from "./UserPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";
//hello world
const UserForm = () => {
  const { step } = useContext(formContext);
  console.log(step);

  return (
    <>
      <h1>User Details</h1>
      {step === 1 && <UserLoginDetails />}
      {step === 2 && <UserPersonalDetails />}
      {step === 3 && <Confirm />}
      {step === 4 && <Success />}
    </>
  );
};

export default UserForm;
