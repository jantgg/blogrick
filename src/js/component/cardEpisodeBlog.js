import React from "react";
import { Link } from "react-router-dom";


export const CardEpisodeBlog = ({episode}) => {
    return(
        <div key="" className="card col-2">
        <img src="https://home.episodeinteractive.com/img/share.jpg" className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">{episode.name}</h5>
          <p className="card-text">Status: {episode.status}</p>
          <p className="card-text">Species: {episode.species}</p>
          <p className="card-text">Gender: {episode.gender}</p>
          <Link to={"card-details/episode/" + episode.id}>
          <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>


    )};
