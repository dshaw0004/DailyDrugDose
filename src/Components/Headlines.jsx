import React from "react";
import "./main.css";
export default function Headlines(props) {
	return (
		<div className="card">
			<button className="btn btn-primary readMore-btn">
				<a href={props.readMoreUrl} target="_blank">
					read <span class="material-symbols-outlined">open_in_new</span>
				</a>
			</button>
			<div className="img-container">
				<img src={props.imageUrl} className="card-img-top mx-auto" alt="..." />
			</div>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				{false && <p className="card-text">{props.des}</p>}
			</div>
		</div>
	);
}

Headlines.defaultProps = {
	imageUrl: "null",
	title: "news title",
	des: "descriptaion of the news",
	readMoreUrl: "https://github.com/dshaw0004",
};
