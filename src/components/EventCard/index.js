import React from "react";
import "./EventCard.css";

function EventCard({ events }) {
  const eventDate = (eDate) => {
    return new Date(eDate).toLocaleDateString("en-US-POSIX", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "GMT",
    });
  };
  return (
    <div className="row">
      {events &&
        events.length &&
        events.map((item) => (
          <div className="col-md-4 col-sm-6 mt-2" key={item?.id}>
            <div className="e-card card-body">
              <div className="heading">EVENT DETAILS</div>
              <hr />
              <div className="row">
                <div className="col-6">
                  <div>
                    <h6>Country</h6>
                    <p>{item?.venue?.country}</p>
                  </div>
                  <div className="mt-2">
                    <h6>Venue</h6>
                    <p>{item?.venue?.name}</p>
                  </div>
                </div>
                <div className="col-6">
                  <div>
                    <h6>City</h6>
                    <p>{item?.venue?.city}</p>
                  </div>
                  <div className="mt-2">
                    <h6>Date</h6>
                    <p>{eventDate(item?.datetime)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default EventCard;
