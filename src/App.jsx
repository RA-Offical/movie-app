import { Header, Hero, Movies } from "./containers";
import "./App.css";

function App() {
	return (
		<div className="app">
			<Header />
			<Hero />
			<main>
				<Movies />
			</main>
		</div>
	);
}

export default App;
