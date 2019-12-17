const activeCityReducer = (currentState, action) => {
  if (currentState === undefined) {
    return [];
  }

  if (action.type === "SET_ACTIVE_CITY") {
    return action.payload;
  }
  return currentState;
};

export default activeCityReducer;
