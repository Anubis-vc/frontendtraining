import { Link } from "react-router-dom";
import styles from "./home.module.css";
import speakers from "../../assets/speakers.jpg";
import mens from "../../assets/mens.jpg";
import womens from "../../assets/womens.jpg";
import jewlery from "../../assets/jewlery.jpg";
import Category from "../../Components/Category";

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
			<section className="landing-content">
				<img className="landing-img" src={speakers} alt="landing page image" />
				<h1>Welcome to VC Quarter</h1>
				<p>
					Discover a new age department store on the cutting edge of 
					fashion and electronics.
				</p>
				<div className="landing-buttons">
					<Link to="store">
						<button>
							Shop Now
						</button>
					</Link>
					<Link to="about">
						<button>
							About
						</button>
					</Link>
				</div>
			</section>
		</div>
	);
}

export default Home;