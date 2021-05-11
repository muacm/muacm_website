
import "../Styles/main.css";
import EventCard from "../Components/EventCard/EventCard";
import Events from "../utils/events";
import React, { useState } from "react";

const Events_List = () => {

  const [datas] = useState(Events.Events);

  return (
    <div className="Events">
      <h2>
        Events
      </h2>
      <div className="event-card-container">
        {datas.map((data, index) => (
          <EventCard event_details={data} />
        ))}
      </div>
    </div>
  )
};

export default Events_List;