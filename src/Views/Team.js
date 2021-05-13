
import "../Styles/main.css";
import HOD_Details from "../utils/team";
import Council_Member_Details from "../utils/team";
import Core_Member_Details from "../utils/team";
import Executive_Member_Details from "../utils/team";
import TeamCard from "../Components/TeamCard/TeamCard";
import React, { useState } from "react";

const Team = () => {
  const [hod_data] = useState(HOD_Details.HOD_Details.HOD);
  const [council_data] = useState(Council_Member_Details.Council_Member_Details.Council);
  const [core_data] = useState(Core_Member_Details.Core_Member_Details.Core);
  const [executive_data] = useState(Executive_Member_Details.Executive_Member_Details.Executive);

  return (
    <div className="Team">
      <h2>
        Team
      </h2>
      <div className="team-card-container">
          <h3>
            Faculty Coordinator
          </h3>
        <div id="HOD-container">
          {hod_data.map((data, index) => (
            <TeamCard TeamCard_Details={data} />
        ))}
        </div>
          <h3>
            Council Members
          </h3>
        <div id="council-container">
          {council_data.map((data, index) => (
            <TeamCard TeamCard_Details={data} />
        ))}
        </div>
          <h3>
            Core Members
          </h3>
        <div id="core-container">
          {core_data.map((data, index) => (
            <TeamCard TeamCard_Details={data} />
        ))}
        </div>
          <h3>
            Executive Members
          </h3>
        <div id="executive-container">
          {executive_data.map((data, index) => (
            <TeamCard TeamCard_Details={data} />
        ))}
        </div>
      </div>
    </div>
  )
};

export default Team;