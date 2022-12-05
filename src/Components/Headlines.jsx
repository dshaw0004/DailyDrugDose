import React from "react";
import "./main.css";
export default function Headlines(props) {
	return (
		<div className="card col-6 col-lg-3 mx-1" style={{ width: "250px" }}>
			<img src={props.imageUrl} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.des}</p>
				<a href={props.readMoreUrl} className="btn btn-primary">
					read more
				</a>
			</div>
		</div>
	);
}

Headlines.defaultProps = {
	imageUrl: "null",
	title: "news title",
	des: "descriptaion of the news",
	readMoreUrl: "https//github.io/dshaw0004",
};
