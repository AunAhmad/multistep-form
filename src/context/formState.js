import formContext from "./formContext";
import { useReducer } from "react";
import formReducer from "./formReducer";

import React from "react";

const FormState = (props) => {
  const initialState = {
    step: 1,
    data: {
      name: "",
      email: "",
      age: 2,
      occupation: "",
      city: "",
      phone: 234,
    },
  };
  const [state, dispatch] = useReducer(formReducer, initialState);

  const nextStep = () => {
    dispatch({
      type: "NEXT_STEP",
    });
  };
  const prevStep = () => {
    dispatch({
      type: "PREV_STEP",
    });
  };

  return (
    <formContext.Provider
      value={{
        step: state.step,
        data: state.data,
        nextStep,
        prevStep,
      }}
    >
      {props.children}
    </formContext.Provider>
  );
};

export default FormState;
