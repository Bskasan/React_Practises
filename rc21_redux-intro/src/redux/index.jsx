const initialState = {
  counter: 0, //? Global state...
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return { counter: state.counter + 1 };

    default:
      break;
  }
};
