import React from "react";
import { Link } from "react-router-dom";


export const CardLocationBlog = ({location}) => {
    return(
        <div key="" className="card col-2">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRWCC-wv5j6CF27ebxJ9iWvpLf9AkRGbwHsQ&usqp=CAU" className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">{location.name}</h5>
          <p className="card-text">Status: {location.status}</p>
          <p className="card-text">Species: {location.species}</p>
          <p className="card-text">Gender: {location.gender}</p>
          <Link to={"card-details/location/" + location.id}>
          <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>


    )};
