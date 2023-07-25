import { Outlet } from "react-router-dom";
import { Header } from "../";

const SharedLayout = () => {
	return (
		<div className="app">
			<Header />

			<Outlet />
		</div>
	);
};

export default SharedLayout;
