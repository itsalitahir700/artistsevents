import React, { useState } from "react";
import "./Search.css";
import { FaSearch } from "react-icons/fa";
import { getArtistsByName } from "../../store/actions/Artist";
import { useDispatch } from "react-redux";

function Search({ setLoading }) {
  const dispatch = useDispatch();
  const [artistName, setArtistName] = useState();

  const fetchData = async (e) => {
    if (e?.keyCode === 13) {
      setLoading(true);
      localStorage.setItem("lastSearch", e.target.value);
      await dispatch(await getArtistsByName(e.target.value));
      setLoading(false);
    }
  };

  return (
    <div id="custom-search-input col-md-12">
      <div className="input-group d-flex align-items-center col-md-12">
        <input
          onChange={(e) => setArtistName(e.target.value)}
          onKeyDown={fetchData}
          value={artistName || ""}
          type="text"
          className="  search-query form-control"
          placeholder="Search"
        />
        <span className="search-icon">
          <FaSearch />
        </span>
      </div>
      <small className="last">
        {localStorage.getItem("lastSearch")
          ? `last search : ${localStorage.getItem("lastSearch")} `
          : null}
      </small>
    </div>
  );
}

export default Search;
