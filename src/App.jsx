import { Header, Hero, Movies } from "./containers";
import { FixedAlert, FixedOverlayLoader } from "./components";
import { Login, Signup, Account, WatchList, MovieInfo } from "./pages";
import "./App.css";

function App() {
	return (
		<div className="app">
			<Header />
			{/* <Hero /> */}
			<main>
				<MovieInfo />
				{/* <FixedAlert /> */}
				{/* <FixedOverlayLoader /> */}
				{/* <Movies /> */}
				{/* <Login /> */}
				{/* <Signup /> */}
				{/* <Account /> */}
				{/* <WatchList /> */}
			</main>
		</div>
	);
}

export default App;
