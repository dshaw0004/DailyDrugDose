import React, { Component } from "react";

export class NavBar extends Component {
	render() {
		return (
			<nav className="navbar bg-light">
				<div className="container-fluid">
					<span className="navbar-brand mb-0 h1">NewsApp</span>
				</div>
			</nav>
		);
	}
}

export default NavBar;
