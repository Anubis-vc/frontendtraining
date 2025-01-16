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
			<img src={image} alt={name} />
			<div className={styles["category-card-content"]}>
				<h3>{name}</h3>
				<Link to={link}>
					<button onClick={handleClick}>Explore</button>
				</Link>
			</div>
		</div>
	);
};

export default Category;