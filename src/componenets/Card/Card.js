import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faMapMarkerAlt, faBox, faCode } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Card/Card.css';

const Card = ({ header, icon, text, buttonText }) => {
  return (
    <div className="card m-3">
      <div className="card-body">
        <h5 className="card-title">
          <FontAwesomeIcon icon={icon} className="me-2" />
          {header}
        </h5>
        <p className="card-text">{text}</p>
        <button className="btn btn-primary">{buttonText}</button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="container3">
      <div className="row">
        <div className="col-md-5">
          <Card
            header="People"
            icon={faUsers}
            text="Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.."
            buttonText="Connect"
          />
        </div>
        <div className="col-md-5">
          <Card
            header="Place"
            icon={faMapMarkerAlt}
            text="Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.."
            buttonText="Meetup"
            buttonColor="purple"
          />
        </div>
        <div className="col-md-5">
          <Card
            
            header="Product"
            icon={faBox}
            text="Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.."
            buttonText="Get it"
          />
        </div>
        <div className="col-md-5">
          <Card
            header="Program"
            icon={faCode}
            text="Find events, meetups and workshops related to your hobby.  Register or buy tickets online."
            buttonText="Attend"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
