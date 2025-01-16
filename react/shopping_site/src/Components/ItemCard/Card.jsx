import { useNavigate } from "react-router-dom";
import styles from "./card.module.css";

function Card ({
	id,
	title,
	image,
	price,
	setCart,
	cart,
}) {
	const navigate = useNavigate();

	let USDollar = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	const handleAddToCart = () => {
		if (cart.findIndex(product => product.id === id) === -1) {
			setCart(prev => [...prev, {id, title, image, price, quantity: 1}]);
		}
		else {
			setCart(prev =>
				prev.map(product =>
					product.id === id ? {...product, quantity: product.quantity + 1}
						: product
				)
			);
		}
	};

	const handleClick = e => {
		if (e.target.localName !== "button") {
			if (e.target.parentNode.localName !== "button") {
				navigate("/product/" + id);
			}
		}
	};

	return (
		<div className={styles.card} onClick={handleClick}>
			<img className={styles.image} src={image} alt={title} />
			<h2 className={styles.title}>{title}</h2>
			<div>
				<span className={styles.price}>{USDollar.format(price)}</span>
			</div>
			<button className={styles.btn} onClick={handleAddToCart}>
				Add to Cart
			</button>
		</div>
	);
}

export default Card;