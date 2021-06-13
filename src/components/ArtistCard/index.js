import React from "react";
import "./ArtistCard.css";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

function ArtistCard({ artist }) {
  const history = useHistory();
  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0, type: "tween" }}
      className="card card-body"
      onClick={() => history.push(`/events?artist=${artist?.name}`)}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div className="col-md-4 col-sm-4">
          <img className="img-artist" src={artist?.thumb_url} alt="artist" />
        </div>
        <div className="col-md-8 col-sm-8">
          <strong> {artist?.name}</strong>
          <p className="fb-url">{artist?.facebook_page_url}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default ArtistCard;
