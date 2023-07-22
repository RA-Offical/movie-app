import { Header, Hero, Movies } from "./containers";
import { FixedAlert } from "./components";
import "./App.css";

function App() {
	return (
		<div className="app">
			<Header />
			<Hero />
			<main>
				<FixedAlert />
				<Movies />
			</main>
		</div>
	);
}

export default App;
