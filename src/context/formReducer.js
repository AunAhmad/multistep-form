const formReducer = (state, action) => {
  switch (action.type) {
    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1,
      };
    case "PREV_STEP":
      return {
        ...state,
        step: state.step - 1,
      };
    default:
      return state;
  }
};
export default formReducer;
