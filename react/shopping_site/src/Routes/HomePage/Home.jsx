import { Link } from "react-router-dom";
import styles from "./home.module.css";
import Category from "../../Components/Category";

import landing from "../../assets/landing.jpg";
import speakers from "../../assets/speakers.jpg";
import mens from "../../assets/mens.jpg";
import womens from "../../assets/womens.jpg";
import jewlery from "../../assets/jewlery.jpg";

function Home () {
	const categories = [
		{
			name: "Electronics",
			image: speakers,
			link: "/store",
		},
		{
			name: "Jewlery",
			image: jewlery,
			link: "/store",
		},
		{
			name: "Men's Clothing",
			image: mens,
			link: "/store",
		},
		{
			name: "Women's Clothing",
			image: womens,
			link: "/store",
		},
	];

	return (
		<div className="main-container">
			<section className={styles["landing-content"]}>
				<img className={styles["landing-img"]} src={landing} alt="landing page image" />
				<h1>Welcome to VC Pennies</h1>
				<p>
					Discover a new age department store on the cutting edge of 
					fashion and electronics to fit any budget.
				</p>
				<div className={styles["landing-buttons"]}>
					<Link to="store">
						<button className={`${styles["btn"]} ${styles["btn-primary"]}`}>
							Shop
						</button>
					</Link>
					<Link to="about">
						<button className={`${styles["btn"]} ${styles["btn-secondary"]}`}>
							About
						</button>
					</Link>
				</div>
			</section>
		</div>
	);
}

export default Home;