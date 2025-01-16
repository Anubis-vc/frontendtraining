import { NavLink } from "react-router-dom";
import CartBtn from "../Components/CartBtn/CartBtn";
import logo from "../assets/logo.png";

const Navbar = ( { cart }) => {
	return (
		<nav>
			<NavLink className="logo-link" to="/">
				<img id="logo" src={logo} alt="VC logo" />
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
			<NavLink to="cart">
				<CartBtn cart={cart}/>
			</NavLink>
		</nav>
	);
};

export default Navbar;