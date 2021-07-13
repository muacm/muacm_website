import "./EventCard.css";
import React, { useState } from "react";
import ReactModal from "react-modal";

const EventCard = ({ event_details }) => {
  const [eventDetailsModalState, setEventDetailsModalState] = useState(false);

  if (event_details["status"] === "done") {
    return (
      <div
        className="EventCard"
        onClick={() => {
          setEventDetailsModalState(true);
        }}
        style={{
          cursor: "pointer",
          borderBottom: "4px solid",
          borderColor: "red",
        }}
      >
        <h3 className="event_title">{event_details["event_title"]}</h3>
        <p className="event_description">
          {event_details["event_description"]}
        </p>
        <p className="event_date">{event_details["event_date"]}</p>
        <span
          style={{
            color: "red",
            fontFamily: "inherit",
          }}
        >
          Done
        </span>

        <ReactModal
          isOpen={eventDetailsModalState}
          onRequestClose={() => setEventDetailsModalState(false)}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0)",
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "auto",
              marginBottom: "auto",
              width: "880px",
              height: "500px",
              overflow: "hidden",
              boxSizing: "border-box",
            },
            content: {
              background: "white",
              border: "none",
              boxShadow: "4px 4px 14px rgba(0, 0, 0, 0.225)",
            },
          }}
        >
          <h1>{event_details["event_title"]}</h1>
          <p>{event_details["event_description"]}</p>
          <span>
            Held on (<b>{event_details["event_date"]}</b>)
          </span>
          <p
            style={{
              color: "red",
              fontFamily: "inherit",
            }}
          >
            Done
          </p>
        </ReactModal>
      </div>
    );
  } else if (event_details["status"] === "upcoming") {
    return (
      <div
        className="EventCard"
        onClick={() => {
          setEventDetailsModalState(true);
        }}
        style={{
          cursor: "pointer",
          borderBottom: "4px solid",
          borderColor: "blue",
        }}
      >
        <h3 className="event_title">{event_details["event_title"]}</h3>
        <p className="event_description">
          {event_details["event_description"]}
        </p>
        <p className="event_date">{event_details["event_date"]}</p>
        <span
          style={{
            color: "blue",
            fontFamily: "inherit",
          }}
        >
          Upcoming
        </span>

        <ReactModal
          isOpen={eventDetailsModalState}
          onRequestClose={() => setEventDetailsModalState(false)}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0)",
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "auto",
              marginBottom: "auto",
              width: "880px",
              height: "500px",
              overflow: "hidden",
              boxSizing: "border-box",
            },
            content: {
              background: "white",
              border: "none",
              boxShadow: "4px 4px 14px rgba(0, 0, 0, 0.225)",
            },
          }}
        >
          <h1>{event_details["event_title"]}</h1>
          <p>{event_details["event_description"]}</p>
          <span>
            Will be held on (<b>{event_details["event_date"]}</b>)
          </span>
          <p
            style={{
              color: "blue",
              fontFamily: "inherit",
            }}
          >
            Upcoming
          </p>
          <a
            href={event_details["registration_url"]}
            target="_blank"
            rel="noreferrer"
          >
            <button className="primaryButton">Register for the event</button>
          </a>
        </ReactModal>
      </div>
    );
  } else {
    return <></>;
  }
};

export default EventCard;
