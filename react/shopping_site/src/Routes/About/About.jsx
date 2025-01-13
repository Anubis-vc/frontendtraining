import { Link } from "react-router-dom";
import styles from "./about.module.css";

import about from "../../assets/about.jpg";
import speakers from "../../assets/speakers.jpg";
import service from "../../assets/service.jpg";
import affordable from "../../assets/affordable.jpg";
import mission from "../../assets/mission.jpg";

function About () {
	const cards = [
		{
			id: 1,
			text: "Pioneering Designs",
			image: speakers,
		},
		{
			id: 2,
			text: "Affordable Prices",
			image: affordable,
		},
		{
			id: 3,
			text: "First-Rate Service",
			image: service,
		},
	];

	return (
		<div className="main-container">
			<div className={styles["about-main"]}>
				<div className={styles.aboutSection}>
					<img className={styles.aboutImage} src={about} alt="workers in warehouse" />
					<h1 className={styles.mainTitle}>Combining innovation with accessibility.</h1>
				</div>

				<div className={styles.aboutSection}>
					<h2 className={styles.title}>Our Mission.</h2>
					<div className={styles.missionContainer}>
						<p>
							At VC Pennies, we aim to provide world-class customer service 
							on items you love at prices you'll rave about.
						</p>
						<img className={styles.missionImage} src={mission} alt="all hands in" />
					</div>
				</div>

				<div className={styles.aboutSection}>
					<h2 className={styles.title}>Our Mantra.</h2>
					<div className={styles.innerSection}>
						{cards.map(card => (
							<div key={card.id} className={styles.innerCard}>
								<img src={card.image} />
								<p>{card.text}</p>
							</div>
						))}
					</div>
				</div>

				<div className={styles.aboutSection}>
					<h2 id={styles.connectTitle}>Join our team.</h2>
					<p id={styles.connectSubtitle}>
						Have questions? We're here for you.
					</p>
					<div className={styles.btns}>
						<Link to="/contact">
							<button className={`${styles["btn"]} ${styles["btn-primary"]}`}>
                				Contact Us
              				</button>
						</Link>
						<Link to="/store">
							<button className={`${styles["btn"]} ${styles["btn-secondary"]}`}>
								Shop
							</button>
						</Link>
					</div>
				</div>

			</div>
		</div>
	);
}

export default About;