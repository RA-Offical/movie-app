import "./navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<ul className="flex align-ic navlist">
				<li className="nav__item">
					<button className="btn btn--primary-no-outline">
						Signup
					</button>
				</li>

				<li className="nav__item">
					<button className="btn btn--primary">Login</button>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
