const defaultState = null;
const artistState = (state = defaultState, action) => {
  switch (action.type) {
    case "ARTIST_SUCCESS": {
      return action.payload;
    }
    default:
      return state;
  }
};

export default artistState;
