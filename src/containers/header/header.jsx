import { Navbar } from "../../components";
import "./header.css";

const Header = () => {
	return (
		<div className="fixed top-0 left-0 right-0 header-wrapper">
			<header className="max-fw mg-center md-padx-1x pady-20x flex align-ic header">
				<a href="#" className="logo">
					RMovies
				</a>
				<Navbar />
			</header>
		</div>
	);
};

export default Header;
