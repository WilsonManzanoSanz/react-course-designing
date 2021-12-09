import React, { useState, useContext } from "react";
import { SpeakerFilterContext } from "../context/SpeakerFilterContext";
import { SpeakerProvider, SpeakerContext } from '../context/SpeakerContext';

function Session({ title, room }) {
  return (
    <span className="session w-100">
      {title} <strong>Room: {room.name}</strong>
    </span>
  );
}

function Sessions() {
  const { eventYear } = useContext(SpeakerFilterContext);
  const { speaker } = useContext(SpeakerContext);
  const {sessions} =  speaker;

  return (
    <div className="sessionBox card h-250">
      {sessions
        .filter(function (session) {
          return session.eventYear === eventYear;
        })
        .map(function (session) {
          return (
            <div className="session w-100" key={session.id}>
              <Session {...session} />
            </div>
          );
        })}
    </div>
  );
}

function SpeakerImage() {
  const {speaker } = useContext(SpeakerContext);
  const { id, first, last } = speaker;
 
  return (
    <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
      <img
        className="contain-fit"
        src={`/images/speaker-${id}.jpg`}
        width="300"
        alt={`${first} ${last}`}
      />
    </div>
  );
}

function SpeakerFavorite({ favorite }) {
  
  const { speaker, setSpeaker } = useContext(SpeakerContext);
  const [inTransition, setInTransition] = useState(false);
  function doneCallback() {
    setInTransition(false);
    console.log(
      `In SpeakerFavorite:doneCallback    ${new Date().getMilliseconds()}`
    );
  }

  const updateFavorite = () => {
    setInTransition(true);
    setSpeaker({...speaker, favorite: !speaker.favorite}, doneCallback)
  }

  return (
    <div className="action padB1">
      <span
        onClick={updateFavorite}
      >
        <i
          className={
            favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
          }
        />{" "}
        Favorite{" "}
        {inTransition ? (
          <span className="fas fa-circle-notch fa-spin"></span>
        ) : null}
      </span>
    </div>
  );
}

function SpeakerDemographics() {
  const { speaker } = useContext(SpeakerContext);
  const {
    first,
    last,
    bio,
    company,
    twitterHandle,
    favorite,
    onFavoriteToggle,
  } = speaker;


  return (
    <div className="speaker-info">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="text-truncate w-200">
          {first} {last}
        </h3>
      </div>
      <SpeakerFavorite
        favorite={favorite}
      />
      <div>
        <p className="card-description">{bio}</p>
        <div className="social d-flex flex-row mt-4">
          <div className="company">
            <h5>Company</h5>
            <h6>{company}</h6>
          </div>
          <div className="twitter">
            <h5>Twitter</h5>
            <h6>{twitterHandle}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

function Speaker({ speaker, setSpeaker }) {
  const { sessions } = speaker;
  const { showSessions } = useContext(SpeakerFilterContext);
  return (
    <SpeakerProvider speaker={speaker} setSpeaker={setSpeaker}>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
        <div className="card card-height p-4 mt-4">
          <SpeakerImage />
          <SpeakerDemographics/>
        </div>
        {showSessions === true ? <Sessions/> : null}
      </div>
    </SpeakerProvider>
  );
}

export default Speaker;
