import { getArtistsByName as getArtistsByNameService } from "../../services/Artist";

export const getArtistsByName = async (artistName) => async (dispatch) => {
  try {
    const resp = await getArtistsByNameService(artistName);
    dispatch({
      type: "ARTIST_SUCCESS",
      payload: resp.data,
    });
    return resp.data;
  } catch (error) {
    dispatch({
      type: "ARTIST_ERROR",
      error,
    });
  }
};

export default {
  getArtistsByName,
};
