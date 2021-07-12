
import './EventCard.css'
import React, { useState } from 'react';
import ReactModal from 'react-modal';

const EventCard = ({event_details}) => {

  const [eventDetailsModalState, setEventDetailsModalState] = useState(false);

  return (
    <div className="EventCard" onClick={() => {
      setEventDetailsModalState(true)
    }}
    style={{
      cursor: 'pointer'
    }}
    >
      <h3 className="event_title">
        {event_details["event_title"]}
      </h3>
      <p className="event_description">
        {event_details["event_description"]}
      </p>
      <p className="event_date">
        {event_details["event_date"]}
      </p>

      <ReactModal
        isOpen={eventDetailsModalState}
        onRequestClose={() => setEventDetailsModalState(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: 'auto',
            marginBottom: 'auto',
            width: '880px',
            height: '500px',
            overflow: 'hidden',
            boxSizing: 'border-box'
          },
          content: {
            background: 'white',
            border: 'none',
            boxShadow: '4px 4px 14px rgba(0, 0, 0, 0.225)'
          }
        }}
      >
        <h1>{event_details["event_title"]}</h1>
        <p>{event_details["event_description"]}</p>
        <span>Held on (<b>{event_details["event_date"]}</b>)</span>
      </ReactModal>

    </div>
  )
};

export default EventCard;