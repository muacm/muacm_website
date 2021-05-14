
import "./TeamCard.css";
import imageContainer from './../../utils/teamImages'

const TeamCard = ({TeamCard_Details}) => {

  return (
    <div className="TeamCard">
      <img src={imageContainer[TeamCard_Details["Name"]]} />

      <h3>{TeamCard_Details["Name"]}</h3>
      <p>{TeamCard_Details["Title"]}</p>
      <div className="social-icons">
        <a href={TeamCard_Details["linkedin"]} target="_blank">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href={TeamCard_Details["github"]} target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <a href={TeamCard_Details["twitter"]} target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
        <a href={TeamCard_Details["instagram"]} target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
        <a href={TeamCard_Details["facebook"]} target="_blank">
          <i className="fab fa-facebook"></i>
        </a>
      </div>
    </div>
  )
};

export default TeamCard;