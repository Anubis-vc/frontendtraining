import styles from "./cartsummary.module.css";

function CartSummary ({ cart }) {
	const getTotal = () => {
		let total = 0;
		cart.forEach(product => {
			total += product.price * product.quantity;
		});
		return total;
	};

	const subtotal = getTotal();
	const tax = subtotal * 0.07;
	const total = subtotal + tax;

	let USDollar = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	return (
		<div className={styles.summaryCont}>
			<h3>CART SUMMARY</h3>
			<div className={styles.subPrice}>
				SUBTOTAL <span>{USDollar.format(subtotal)}</span>
			</div>
			<div className={styles.subPrice}>
				TAX <span>{USDollar.format(tax)}</span>
			</div>
			<div className={styles.subPrice}>
				TOTAL <span>{USDollar.format(total)}</span>
			</div>
			<button>CHECKOUT</button>
		</div>
	);
}

export default CartSummary;