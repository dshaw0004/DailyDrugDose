import React from "react";
import HeadLines from "./HeadLines";
// import Link from "react-router-dom";

// const category = [
// 	"all",
// 	"national",
// 	"business",
// 	"sports",
// 	"world",
// 	"politics",
// 	"technology",
// 	"startup",
// 	"entertainment",
// 	"miscellaneous",
// 	"hatke",
// 	"science",
// 	"automobile",
// ];
function NewsContainer(props) {
	// handleChange(e) {
	// 	this.setState({ category: e.target.value });
	// }

	return (
		<main>
			{props.articles.map((el) => {
				return (
					<HeadLines
						key={el._id}
						title={el.title}
						des={el.summary}
						imageUrl={el.media}
						readMoreUrl={el.link}
					/>
				);
			})}
		</main>
	);
}

export default NewsContainer;
