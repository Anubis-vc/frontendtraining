import { Link } from "react-router-dom";
import styles from "../Routes/HomePage/home.module.css";

function Category ({
	link,
	name,
	image,
	setCategory
}) {

	const handleClick = () => {
		const map = {
			"Electronics": "electronics",
			"Jewelry": "jewelry",
			"Men's Clothing": "mens",
			"Women's Clothing": "womens",
		}

		setCategory(map[name]);
		window.scrollTo(0, 0);
	}

	return (
		<div className={styles["category-card"]}>
			<Link to={link} className={styles.imageContainer} onClick={handleClick}>
				<img src={image} alt={name} />
				<div className={styles.overlay}>
					<div className={styles.text}>Shop</div>
				</div>
			</Link>
			<p>{name}</p>
			<Link to={link}>
				<button onClick={handleClick}>Shop</button>
			</Link>
		</div>
	);
};

export default Category;