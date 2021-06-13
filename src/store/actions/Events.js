import { getEvents as getEnventsService } from "../../services/Event";

export const getEvents = async (artistName) => async (dispatch) => {
  try {
    const resp = await getEnventsService(artistName);
    dispatch({
      type: "EVENT_SUCCESS",
      payload: resp.data,
    });
    return resp.data;
  } catch (error) {
    dispatch({
      type: "EVENT_ERROR",
      error,
    });
  }
};

export default {
  getEnventsService,
};
