import { Header, Hero, Movies } from "./containers";
import { FixedAlert, Loader, FixedOverlayLoader } from "./components";
import "./App.css";

function App() {
	return (
		<div className="app">
			<Header />
			<Hero />
			<main>
				{/* <FixedAlert /> */}
				<FixedOverlayLoader />
				<Movies />
			</main>
		</div>
	);
}

export default App;
