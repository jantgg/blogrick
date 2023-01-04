import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardCharacterBlog = ({character}) => {
  const {actions} = useContext(Context);

    return(
        <div key="" className="card col-2">
        <img src={character.image} className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <p className="card-text">Status: {character.status}</p>
          <p className="card-text">Species: {character.species}</p>
          <p className="card-text">Gender: {character.gender}</p>
          <Link to={"card-details/character/" + character.id}>
          <button className="btn btn-primary">Details</button>
          </Link>
          <button className="btn btn-outline-warning" onClick={()=>actions.setFavorites(character.name)}>❤️</button>
        </div>
      </div>


    )};
