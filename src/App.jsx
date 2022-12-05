// import "./App.css";
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

import React, { Component, useEffect, useState } from "react";
import NewsContainer from "./Components/NewsContainer";

const url = `https://api.newscatcherapi.com/v2/search?q=science`;

// export default class App extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			articles: [],
// 			loading: true,
// 			category: "science",
// 		};
// 	}
// 	componentDidMount() {
// 		function call() {
// 			fetch(`${url}`, {
// 				headers: {
// 					"x-api-key": "FX7d_IkIjEfnqUo-qHQK6VrTj82cVS5BGFCAf3CK8M0",
// 				},
// 			})
// 				.then((res) => res.json())
// 				.then((data) => {
// 					console.log(data);
// 					data.status === "ok"
// 						? this.setState({ loading: false, articles: data.articles })
// 						: this.setState({ loading: true });
// 					console.log(articles);
// 					console.log("print all");
// 				});
// 		}
// 		call();
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<NavBar />
// 				<NewsContainer articles={this.state.articles} />
// 			</div>
// 		);
// 	}
// }

export default function App() {
	const [Articles, setArticles] = useState([]);
	useEffect(() => {
		function call() {
			fetch(`${url}`, {
				headers: {
					"x-api-key": "FX7d_IkIjEfnqUo-qHQK6VrTj82cVS5BGFCAf3CK8M0",
				},
			})
				.then((res) => res.json())
				.then((data) => {
					setArticles(data.articles);

					// console.log(data.articles);
					// console.log(Articles);
					// console.log("print all");
				});
		}
		call();
	}, []);
	return (
		<div>
			<NavBar />
			<NewsContainer articles={Articles} />
		</div>
	);
}
