import React, { useState } from "react";
import Loader from "../components/Loader/";
import Search from "../components/Search";
import ArtistCard from "../components/ArtistCard";
import { useSelector } from "react-redux";

function Home() {
  const artist = useSelector((state) => state.AppState?.artistState);
  const [loading, setLoading] = useState(false);
  return (
    <div className="container">
      <Search setLoading={setLoading} />

      {loading ? (
        <Loader />
      ) : (
        artist && (
          <div className="col-md-6 mt-4">
            <h5>Result found</h5>
            <ArtistCard artist={artist} />
          </div>
        )
      )}
    </div>
  );
}

export default Home;
