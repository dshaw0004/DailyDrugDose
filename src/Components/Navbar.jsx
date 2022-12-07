import React, { Component } from "react";
import { Filter } from "./Filter";
import "./main.css";
export class NavBar extends Component {
	render() {
		let { changeCategory, changeType } = this.props;
		return (
			<nav className="navbar bg-light">
				<div className="container-fluid">
					{/* <img src={logo} alt="logo" className="ddd-logo" /> */}
					<span className="navbar-brand mb-0 h1">DailyDrugDose</span>
					<Filter changeCategory={changeCategory} changeType={changeType} />
				</div>
			</nav>
		);
	}
}

export default NavBar;
