import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export const CardDetails = () => {
	const params = useParams();
	const [itemsDetails, setItemsDetails] = useState({});

	useEffect(()=>{
	getDetails();
	},[])

const getDetails = async () => {
	const response = await fetch("https://rickandmortyapi.com/api/" + params.type + "/" + params.id);
	const data = await response.json();
	setItemsDetails(data);

};

	return (
	<div className="container">
		<h1>Details {params.id}</h1>
		<p>Name: {itemsDetails.name}</p>
		{Object.keys(itemsDetails).map((x, i)=>{
			if(typeof itemsDetails[x]!="object"){return(<p key={i}>{x}: {itemsDetails[x]}</p>)} 
		})}
	</div>
	);
}