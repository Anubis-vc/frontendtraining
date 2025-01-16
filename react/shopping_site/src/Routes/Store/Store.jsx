import { useEffect } from "react";
import styles from "./store.module.css";
import Card from "../../Components/ItemCard/Card";

function Store ({
	cart,
	data,
	category,
	sort,
	setCart,
	setCategory,
	setSort,
}) {

	if (!data || data.length === 0) {
		return <div>Loading Products...</div>;
	}

	const filteredProducts = data.filter(product => {
		if (category === "all") return true;
		else {
			const map = {
				electronics: "electronics",
				jewelry: "jewelery",
				mens: "men's clothing",
				womens: "women's clothing"
			};
			return product.category === map[category];
		}
	});

	const sortedProducts = [...filteredProducts].sort((a, b) => {
		if (sort === "name") {
			return a.title.localeCompare(b.title);
		}
		else if (sort === "price") {
			return a.price - b.price;
		}
		else if (sort === "rating") {
			return a.rating["rate"] - b.rating["rate"];
		}
		return 0;
	});

	return (
		<div className="main-container">
			<section className={styles.storeMain}>
				<section className={styles.bar}>
					<label htmlFor="category">Category: </label>
					<div className={styles.customSelect}>
						<select
							name="category"
							id="category"
							value={category}
							onChange={e => {setCategory(e.target.value)}}
						>
							<option value="all">All</option>
							<option value="electronics">Electronics</option>
							<option value="jewelry">Jewelry</option>
							<option value="mens">Men's Clothing</option>
							<option value="womens">Women's Clothing</option>
						</select>
					</div>
					<label htmlFor="sort">Sort by: </label>
					<div className={styles.customSelect}>
						<select
							name="sort"
							id="sort"
							value={sort}
							onChange={e => {setSort(e.target.value)}}
						>
							<option value="name">Name</option>
							<option value="price">Price</option>
							<option value="rating">Rating</option>
						</select>
					</div>
				</section>
				<section className={styles.productGrid}>
					{sortedProducts.map((product) => (
						<Card
							key={product.id}
							id={product.id}
							title={product.title}
							image={product.image}
							price={product.price}
							cart={cart}
							setCart={setCart}
						/>
					))}
				</section>
			</section>
		</div>
	);
}

export default Store;