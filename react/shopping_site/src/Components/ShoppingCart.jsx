import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ShoppingCart = ( {cart} ) => {
	const location = useLocation();

	const numItems = () => {
		let numItems = 0;
		cart.forEach( product => {
			numItems += product.quantity;
		});
		return numItems;
	}

	return (
		<>
			{(location.pathname === "/store" ||
				location.pathname.split("/")[1] === "product") && (
					<Link to="cart">
						<button id="shoppingCart">
							{cart.length > 0 && <span id="numItems">{numItems()}</span>}
							{/* <img src="" alt="" /> */}
						</button>
					</Link>
				)
			}
		</>
	);
};

export default ShoppingCart;