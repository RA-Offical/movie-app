import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<ul className="flex align-ic navlist">
				<li className="nav__item">
					<Link to="/signup" className="btn btn--primary-no-outline">
						Signup
					</Link>
				</li>

				<li className="nav__item">
					<Link to="/login" className="btn btn--primary">
						Login
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
