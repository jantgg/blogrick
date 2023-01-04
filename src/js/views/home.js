import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Card from "../component/card";
import CardLocation from "../component/cardLocation";
import CardEpisode from "../component/cardEpisode";

export const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getCharacters();
    actions.getLocations();
    actions.getEpisodes();
  }, []);

  return (
<div>
<Card />
<CardLocation />     
<CardEpisode />
</div>
  );
};
