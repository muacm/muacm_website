
import "./TeamCard.css";
import imageContainer from './../../utils/teamImages'

const TeamCard = ({TeamCard_Details}) => {

  // /// adding conditional icon placement feature
  // let linkedin_icon = document.querySelector("#linkedin");
  // let github_icon = document.querySelector("#github");
  // let twitter_icon = document.querySelector("#twitter");
  // let instagram_icon = document.querySelector("#instagram");
  // let facebook_icon = document.querySelector("#facebook");

  // if (linkedin_icon != '\0') {
  //   linkedin_icon.style.display = "none"
  // }

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
};

export default TeamCard;