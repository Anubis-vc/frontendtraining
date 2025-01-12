import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<NavLink className="logo" to="/">
				Come back with logo
				{/* <img src="" alt="" /> */}
			</NavLink>
			<ul>
				<li>
					<NavLink to="/" className={ ({isActive}) => (isActive ? "active" : "")}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="about" className={ ({isActive}) => (isActive ? "active" : "")}>
						About
					</NavLink>
				</li>
				<li>
					<NavLink to="store" className={ ({isActive}) => (isActive ? "active" : "")}>
						Store
					</NavLink>
				</li>
				<li>
					<NavLink to="contact" className={ ({isActive}) => (isActive ? "active" : "")}>
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;