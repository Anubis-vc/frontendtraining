import icon from '../../assets/shopping-cart.svg';
import styles from "./cartbtn.module.css";

function CartBtn ({ cart }) {
	return (
		<button className={styles.cartBtn}>
			{cart.length > 0 && <span className={styles.cartCount}>{cart.length}</span>}
			<img src={icon} alt="cart" />
		</button>
	)
}

export default CartBtn;