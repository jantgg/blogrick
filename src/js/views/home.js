import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { CardCharacterBlog } from "../component/cardCharacterBlog";
import { CardEpisodeBlog } from "../component/cardEpisodeBlog";
import { CardLocationBlog } from "../component/cardLocationBlog";

export const Home = () => {

  const {store, actions} = useContext(Context);

  return (
<div className=" mt-5">



<div className="container">
<h1>Characters</h1>
<div className="row">
{store.characters.map((character)=>{
  return <CardCharacterBlog key={character.id} character={character}/>
})}
</div>
</div>


<div className="container">
<h1>Episodes</h1>
<div className="row">
{store.episodes.map((episode)=>{
  return <CardEpisodeBlog key={episode.id} episode={episode}/>
})}
</div>
</div>


<div className="container">
<h1>Locations</h1>
<div className="row">
{store.locations.map((location)=>{
  return <CardLocationBlog key={location.id} location={location}/>
})}
</div>
</div>


</div>
  );
};
