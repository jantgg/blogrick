import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions}= useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
			<div class="dropdown">
					<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Dropdown button
					</button>
					<ul class="dropdown-menu">
						{store.favorites.length > 0 ? store.favorites.map((favorite, i)=>{
								return <li key={i}>{favorite} <p onClick={()=>actions.setFavorites(favorite)}>X</p></li>
							}) : <li>Empty</li>}
					</ul>
			</div>
		</nav>
	);
};
