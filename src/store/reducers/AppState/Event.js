const defaultState = null;
const eventState = (state = defaultState, action) => {
  switch (action.type) {
    case "EVENT_SUCCESS": {
      return action.payload;
    }
    default:
      return state;
  }
};

export default eventState;
