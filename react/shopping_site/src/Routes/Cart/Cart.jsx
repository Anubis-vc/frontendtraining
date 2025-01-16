import styles from "./cart.module.css";
import CartItem from "../../Components/CartItem/CartItem";
import CartSummary from "../../Components/CartSummary/CartSummary";

function Cart ({ cart, setCart }) {

	return (
		<div className="main-container">
			<div className={styles.cartLayout}>
				<section className={styles.cartMain}>
					<h2>Your Cart</h2>
					{cart.length > 0 ? 
						(
							<div className={styles.cartContainer}>
								{cart.map(product =>
									<CartItem
										key={product.id}
										id={product.id}
										title={product.title}
										image={product.image}
										price={product.price}
										quantity={product.quantity}
										setCart={setCart}
									/>
								)}
							</div>
						) : <div className={styles.emptyCont}>Your cart is empty!</div>
					}
				</section>
				<div className={styles.summaryWrapper}>
					<CartSummary cart={cart} />
				</div>
			</div>
		</div>
	);
}

export default Cart;