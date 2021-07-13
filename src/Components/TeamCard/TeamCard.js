
import "./TeamCard.css";
import imageContainer from './../../utils/teamImages'
import React from 'react';

const TeamCard = ({TeamCard_Details}) => {

  if (TeamCard_Details["type"] === 'faculty') {
    return (
      <div className="TeamCard">
        <img src={imageContainer[TeamCard_Details["Name"]]} />

        <h3>{TeamCard_Details["Name"]}</h3>
        <p>{TeamCard_Details["Title"]}</p>
        <div className="social-icons">
          <a href={'mailto:' + TeamCard_Details['email']} target="_blank" rel="noreferrer">
            <i class="far fa-envelope"></i>
          </a>
        </div>
      </div>
    )
  }
  else if (TeamCard_Details['type'] !== 'faculty') {
    return (
      <div className="TeamCard">
        <img src={imageContainer[TeamCard_Details["Name"]]} />

        <h3>{TeamCard_Details["Name"]}</h3>
        <p>{TeamCard_Details["Title"]}</p>
        <div className="social-icons">
          <a href={TeamCard_Details["linkedin"]} target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin" id="#linkedin"></i>
          </a>
          <a href={TeamCard_Details["github"]} target="_blank" id="#github" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href={TeamCard_Details["twitter"]} target="_blank" id="#twitter" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href={TeamCard_Details["instagram"]} target="_blank" id="#instagram" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href={TeamCard_Details["facebook"]} target="_blank" id="#facebook" rel="noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    )
  }
};

export default TeamCard;