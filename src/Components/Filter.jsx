import React, { useState } from "react";
import "./main.css";

export function Filter(props) {
	const [ModalStatus, setModalStatus] = useState("open");
	const closeModal = () => {
		setModalStatus("close");
	};
	// const layout = (event) => {
	// 	console.log(event.id);
	// };
	return (
		<div className="filter">
			<span
				class="material-symbols-outlined filter-btn"
				onClick={() => {
					setModalStatus("open");
				}}
			>
				tune
			</span>
			<div
				className="filter-modal"
				style={{
					opacity: `${ModalStatus == "open" ? 1 : 0}`,
				}}
			>
				<span
					class="material-symbols-outlined filter-modal-close"
					onClick={closeModal}
				>
					close
				</span>
				<h5>Select Category :- </h5>
				<ul className="category-selector">
					<li id="business" onClick={props.changeCategory}>
						business
					</li>
					<li id="entertainment" onClick={props.changeCategory}>
						entertainment
					</li>
					<li id="general" onClick={props.changeCategory}>
						general
					</li>
					<li id="health" onClick={props.changeCategory}>
						health
					</li>
					<li id="science" onClick={props.changeCategory}>
						science
					</li>
					<li id="sports" onClick={props.changeCategory}>
						sports
					</li>
					<li id="technology" onClick={props.changeCategory}>
						technology
					</li>
				</ul>
				<h5 className="">Other Sources :- </h5>
				<ul className="channel-selector">
					<li onClick={props.changeType} id="bbc-news">
						BBC News
					</li>
					<li onClick={props.changeType} id="cnn">
						CNN
					</li>
					<li onClick={props.changeType} id="fox-news">
						Fox News
					</li>
					<li onClick={props.changeType} id="google-news">
						Google News
					</li>
				</ul>
			</div>
		</div>
	);
}
