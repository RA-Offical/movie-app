import {
	BrowserRouter as Router,
	Routes,
	Route,
	BrowserRouter,
} from "react-router-dom";

import { Header, Hero, Movies, SharedLayout } from "./containers";
import { FixedAlert, FixedOverlayLoader } from "./components";
import { Login, Signup, Account, WatchList, MovieInfo, Home } from "./pages";
import "./App.css";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<Signup />} />
					<Route path="account" element={<Account />} />
					<Route path="watchlist" element={<WatchList />} />
					<Route path="movie/:movieId" element={<MovieInfo />} />
				</Route>
			</Routes>
		</Router>
		// <div className="app">
		// 	<Header />
		// 	{/* <Hero /> */}
		// 	<main>
		// 		<Home />
		// 		{/* <MovieInfo /> */}
		// 		{/* <FixedAlert /> */}
		// 		{/* <FixedOverlayLoader /> */}
		// 		{/* <Movies /> */}
		// 		{/* <Login /> */}
		// 		{/* <Signup /> */}
		// 		{/* <Account /> */}
		// 		{/* <WatchList /> */}
		// 	</main>
		// </div>
	);
}

export default App;
