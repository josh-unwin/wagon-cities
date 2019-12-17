const citiesReducer = (currentState, action) => {
  if (currentState === undefined) {
    return [{ name: "Paris", address: "16 Villa Gaudelet, 75011 Paris", slug: "paris" }];
  }

  if (action.type === "SET_CITIES") {
    return action.payload;
  }
  return currentState;
};

export default citiesReducer;
