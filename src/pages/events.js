import React, { useEffect, useState, useCallback } from "react";
import ArtistCard from "../components/ArtistCard";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../store/actions/Events";
import { getArtistsByName } from "../store/actions/Artist";
import EventCard from "../components/EventCard";
import { IoIosArrowBack } from "react-icons/io";
import { useHistory } from "react-router-dom";
import Loader from "../components/Loader/";

function Events() {
  const url = require("url");
  const urlObj = url.parse(document.location.href, true);
  const artistName = urlObj?.query?.artist;

  const artist = useSelector((state) => state.AppState?.artistState);
  const events = useSelector((state) => state.AppState?.eventState);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const dispatch = useDispatch();

  const handleArtistEvents = useCallback(async () => {
    setLoading(true);
    if (!artist) {
      dispatch(await getArtistsByName(artistName));
    }
    await dispatch(await getEvents(artistName));
    setLoading(false);
  }, [artistName, artist, dispatch]);

  useEffect(() => {
    handleArtistEvents();
  }, [handleArtistEvents]);

  return (
    <>
      <div className="col-md-6 mt-4">
        <p
          className="pointer d-flex align-items-center"
          onClick={() => history.push("/")}
        >
          <IoIosArrowBack />
          Back to results
        </p>
        {artist ? <ArtistCard artist={artist} /> : null}
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="col-md-12 mt-4 ">
          {events && events.length ? (
            <>
              <h5>{events.length} Upcoming Events</h5>
              <EventCard events={events} />
            </>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}

export default Events;
