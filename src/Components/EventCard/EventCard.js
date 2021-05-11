
import './EventCard.css'

const EventCard = ({event_details}) => {
  return (
    <div className="EventCard">
      <h3 className="event_title">
        {event_details["event_title"]}
      </h3>
      <p className="event_description">
        {event_details["event_description"]}
      </p>
      <p className="event_date">
        {event_details["event_date"]}
      </p>
    </div>
  )
};

export default EventCard;