import "../Styles/main.css";
import Events from "../utils/events";
import EventCard from "../Components/EventCard/EventCard";
import React, { useState } from "react";

import ReactModal from 'react-modal';
import PopUpFormContent from "../Components/PopUpFormContent/PopUpFormContent";

const Home = () => {

  const [datas] = useState(Events.Events);
  
  // state and stateHandler for the registration form POPUP-MODAL
  const [registrationFormPopupState, setRegistrationFormPopupState] = useState(true);

  return (
    <div className="Home">
      <h2 className="tagline">
        We believe in building a great technical community <br />
        of Students
      </h2>

      <div className="button_layer">
        <a href="https://discord.gg/kWhRdyddve" target="_blank">
          <button className="primaryButton">
            Join Discord <i className="fab fa-discord"></i>
          </button>
        </a>
        {/* <button className="secondaryButton">
          Check Past Events
        </button> */}
      </div>

      {/* Starting the about MU content */}
      <div className="content-section" id="about-mu">
        <h2>About Medicaps University</h2>
        <p className="content">
          Medi-Caps has been a brand name in the arena of technical education.
          Since its inception in July 2000, Medi-Caps has consistently aimed at
          creating an ideal ambiance for budding technocrats and managers; and
          helping them to grow like true professionals. With its highly
          qualified faculty there seems an optimal blend of academic brilliance
          and industry exposure, supplemented by highly specialized visiting
          faculty and industry experts, senior professionals from various
          segments of different industries and business houses. It was time now
          to spread wings and move out for more exposure and widening of the
          periphery.
        </p>
      </div>

      {/* Starting the about ACM content */}
      <div className="content-section" id="about-acm">
        <div>
          <h2>About ACM</h2>
          <p className="content">
            The ACM (Association for Computing Machinery) is a 74-year-old
            international scientific and industrial computer society. Through
            its many Special Interest Groups, the ACM fosters research and
            communication in a broad range of computing areas. The society has
            around 100,000 members including students and professionals, spread
            over 174 countries leading to interaction between diversified
            computing enthusiasts. ACM conducts various worldwide competitions
            and seminars, where we have learned and scholarly speakers to
            provide us with the opportunity to increase our knowledge and expand
            our horizons. ACM provides us with one of the most enriching digital
            libraries which consists of database full-text articles and
            bibliographic literature covering computing and information
            technology. This leads us to availability of critical content being
            easily discoverable and accessible. ACM strengthens the computing
            profession's collective voice through strong leadership, promotion
            of the highest standards, and recognition of technical excellence.
            ACM leads us to the pathway following which in the near future,
            world’s biggest problems will be solved using computing.
          </p>
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/BHIbT0e7LTc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            id="youtube-video"
          ></iframe>
        </div>
      </div>

      {/* Starting the about ACM-MU Chapter content */}
      <div className="content-section" id="about-muacm">
        <h2>About ACM Medicaps Chapter</h2>
        <p className="content">
          MUACM is an official computing student chapter of Medi-caps university
          under the patronage of technical club STIC. We are not just an
          organization, we are family of like-minded people who intend to make a
          difference in the society, MUACM provides you a platform to explore,
          experience and contribute to the computing world globally. It
          encourages you to pave the path of your career under the guidance of
          professional. The chapter organizes several jaw-dropping events,
          seminars, learning forums, talks by renowned speakers, field trips,
          contests which includes international college programming contest,
          student research competition, it also gives an advantage to access all
          the services and activities of its parent organization ACM with an
          opportunity to develop leadership skills all of these develops the
          competitive spirit and develops the skills suitable for the
          advancement of the technical world. To sum up inception of MUACM
          creates a bridge between you and the computing world, it opens the
          door for your dream success.
        </p>
      </div>

      {/* Starting the about Why connect? content */}
      <div className="content-section" id="about-why-muacm">
        <h2>Why Connect with ACM</h2>
        <p className="content">
          Anybody who believes that as a professional you want to be the best
          professional you can be and take the world’s computing skills to
          another magical level, then ACM is what speaks to that aspiration.
          Apart from the numerous benefits that we receive such as an excellent
          access to the digital library and various publications, ACM considers
          itself a family where you will feel like you belong, the community
          believes in the growth and prosperity of its members and finding
          solutions to world problems using technical knowledge. When you become
          a member, you become a part of the dynamic changes that are
          transforming our world, by helping to shape the future of computing.
          ACM provides the tools and resources to help get you there, by
          advancing your career and enriching your knowledge with life-long
          learning resources. Additionally, ACM being a reputed organisation in
          the industry leads to higher recognition when it is mentioned on a
          student’s resume especially if you are a part of various competitions
          and events being conducted throughout the year. Being a part of this
          community is an honour in itself and definitely leads to your personal
          and professional growth.
        </p>
      </div>

      {/* events section */}
      <div className="events-section">
        <h2>Events</h2>
        <div className="event-card-container">
          {datas.map((data, index) => (
            <EventCard event_details={data} />
          ))}
        </div>
      </div>

      {/* Creating a ReactModal for registration form popup */}
      <ReactModal isOpen={registrationFormPopupState}
        onRequestClose={() => setRegistrationFormPopupState(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0 )',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: 'auto',
            marginBottom: 'auto',
            width: '880px',
            height: '800px',
            overflow: 'hidden',
            boxSizing: 'border-box'
          },
          content: {
            border: 'none',
            boxShadow: '12px 24px 32px rgba(0, 0, 0, 0.225)'
          }
        }}
        >
          <div className="modal-header">
            <i className="fas fa-times" style={{
              float: 'right'
            }}
            onClick={() => setRegistrationFormPopupState(false)}
            ></i>
          </div>
          <h2 style={{
            textAlign: 'center'
          }}>Register for the upcoming Web Development BootCamp</h2>
          <PopUpFormContent />
        </ReactModal>

    </div>
  );
};

export default Home;
