import { Header, Hero, Movies } from "./containers";
import { FixedAlert, FixedOverlayLoader } from "./components";
import { Login, Signup, Account } from "./pages";
import "./App.css";

function App() {
	return (
		<div className="app">
			<Header />
			{/* <Hero /> */}
			<main>
				{/* <FixedAlert /> */}
				{/* <FixedOverlayLoader /> */}
				{/* <Movies /> */}
				{/* <Login /> */}
				{/* <Signup /> */}
				<Account />
			</main>
		</div>
	);
}

export default App;
