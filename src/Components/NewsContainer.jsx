import React from "react";
import HeadLines from "./HeadLines";
import './main.css'

function NewsContainer(props) {
	// console.log(props.articles);
	return (
		<main className="news-container">
			{props.articles.map((el) => {
				// console.log(el);
				return (
					<HeadLines
						key={el.url}
						title={el.title}
						des={el.description}
						imageUrl={el.urlToImage}
						readMoreUrl={el.url}
					/>
				);
			})}
		</main>
	);
}

export default NewsContainer;
