// UTILISATION DU HOOK USERLOADERDATA DANS LE CADRE D'UN LOADER LOCAL :

// import { useLoaderData } from "react-router-dom";

// function Home() {
// 	const weather = useLoaderData() as string;

// 	return (
// 		<>
// 			<h1>Hello from Home</h1>
// 			<p>Today is a {weather} day</p>
// 		</>
// 	);
// }

// export default Home;

import { useRouteLoaderData } from "react-router-dom";

function Home() {
	const weather = useRouteLoaderData("app") as string;

	return (
		<>
			<h1>Hello from Home</h1>
			<p>Today is a {weather} day</p>
		</>
	);
}

export default Home;
