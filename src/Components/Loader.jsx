import React from "react";

export default function Loader() {
	return (
		<div
			className="spinner-border text-danger mx-auto my-5"
			style={{
				width: "3rem",
				height: "3rem",
			}}
			role="status"
		>
			<span className="visually-hidden ">Loading...</span>
		</div>
	);
}
