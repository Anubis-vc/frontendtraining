import styles from "./cartitem.module.css";

function CartItem ( {
	id,
	title,
	image,
	price,
	quantity,
	setCart,
}) {
	const handleChange = e => {
		const value = e.target.value;
		setCart(prev => 
			prev.map(product =>
				product.id === id ? {...product, quantity: value} : product
			)
		);
	}

	const handleClear = () => {
		setCart(prev => 
			prev.filter(item => item.id !== id)
		);
	};

	let USDollar = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	return (
		<div className={styles.itemContainer}>
			<div className={styles.imageContainer}>
				<img src={image} alt={title} />
			</div>
			<button className={styles.clear} onClick={handleClear}>X</button>
			<div className={styles.descContainer}>
				<h3>{title.toUpperCase()}</h3>
				<div className={styles.descBottom}>
					<div className={styles.quantityContainer}>
						<input type="number" value={quantity} onChange={handleChange} min="1"/>
					</div>
					<p className={styles.total}>{USDollar.format(quantity * price)}</p>
				</div>
			</div>
		</div>
	);
}

export default CartItem;