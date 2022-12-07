import "./App.css";
// import Headlines from "./Components/Headlines";
// import Loader from "./Components/Loader";
import NavBar from "./Components/Navbar";

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

import React, { useEffect, useState } from "react";
import NewsContainer from "./Components/NewsContainer";

const url = `https://api.newscatcherapi.com/v2/search?q=science`;

export default function App() {
	const Base_Url = "https://saurav.tech/NewsAPI/";
	const [Category, setCategory] = useState("general");
	const [Articles, setArticles] = useState([]);
	const [url, setUrl] = useState(
		`${Base_Url}top-headlines/category/${Category}/in.json`
	);
	useEffect(() => {
		function call() {
			fetch(url)
				.then((res) => res.json())
				.then((data) => {
					setArticles(data.articles);

					// console.log(data.articles);
					// console.log(Articles);
					// console.log("print all");
				});
		}
		call();
	}, [url]);
	const changeCategory = (event) => {
		setCategory(`${event.currentTarget.id}`);
		setUrl(
			`${Base_Url}top-headlines/category/${event.currentTarget.id}/in.json`
		);
		// event.currentTarget.classList.add("demo");
	};
	const changeType = (event) => {
		setUrl(`${Base_Url}everything/${event.currentTarget.id}.json`);
		// event.currentTarget.classList.add("demo");
	};
	return (
		<>
			<NavBar changeCategory={changeCategory} changeType={changeType} />

			<NewsContainer articles={Articles} />
		</>
	);
}
