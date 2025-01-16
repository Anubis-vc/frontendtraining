import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./product.module.css";

function Product({ data, cart, setCart }) {
	if (!data || data.length === 0) {
		return <div>Loading Products...</div>;
	}

	const { id } = useParams();
	const [numItems, setNumItems] = useState(1);
	const [isExpanded, setIsExpanded] = useState(false);
	/* 
	Again, would usually refetch here, but all data is stored
	client-side so no need for another query. Performance benefits.
	*/
	const product = data.find(item => item.id === Number(id));

	let USDollar = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	const handleChange = e => {
		setNumItems(Number(e.target.value));
	}

	const handleAddToCart = () => {
		if (cart.findIndex(cartItem => cartItem.id === product.id) === -1) {
			setCart(prev => [...prev, {
				id: product.id,
				title: product.title,
				image: product.image,
				price: product.price,
				quantity: numItems,
			}]);
		}
		else {
			setCart(prev =>
				prev.map(cartItem =>
					cartItem.id === product.id ? {...cartItem, quantity: numItems}
						: cartItem
				)
			);
		}
	};

	const toggleDescription = () => {
		setIsExpanded(!isExpanded);
	}

	const maxLength = 250; // Number of characters to show initially
    const truncatedDescription = product.description.length > maxLength
        ? product.description.substring(0, maxLength) + "..."
        : product.description;

	return (
		<div className="main-container">
			<section className={styles.productContainer}>
				<div className={styles.card}>
					<div className={styles.imageContainer}>
					<img 
						className={styles.mainImg}
						src={product.image}
						alt={product.title}
					/>
					</div>
					<div className={styles.descContainer}>
						<h1>{product.title}</h1>
						<div className={styles.aside}>
							<p>Category: <span>{product.category.toUpperCase()}</span></p>
							<p>Rating: <span>★ {product.rating["rate"]} ({product.rating["count"]})</span></p>
						</div>
						<div className={styles.price}>{USDollar.format(product.price)}</div>
						<div className={styles.quantityContainer}>
							<input type="number" value={numItems} onChange={handleChange} min="1"/>
						</div>

						<div className={styles.description}>
							<p className={styles.descriptionText}>{
								isExpanded ? product.description : truncatedDescription}
							</p>
							<button
								className={styles.toggleButton}
								onClick={toggleDescription}
							>
                    			{isExpanded ? "Read Less" : "Read More"}
                			</button>
						</div>

						<button className={styles.btn} onClick={handleAddToCart}>Add to Cart</button>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Product;