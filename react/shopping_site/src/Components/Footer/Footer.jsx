import styles from "./footer.module.css";

import instagram from "../../assets/Socials/instagram.svg";
import linkedin from "../../assets/Socials/linkedin.svg";
import twitter from "../../assets/Socials/twitter.svg";
// import letterboxd from "../../assets/Socials/letterboxd-mono.svg";
import github from "../../assets/Socials/github.svg";

function Footer () {
	const socials = [
		{svg: instagram, href: "https://www.instagram.com/ved.chugh", label: "Instagram"},
		{svg: linkedin, href: "https://www.linkedin.com/in/vedchugh/", label: "LinkedIn"},
		{svg: twitter, href: "https://x.com/notved", label: "Twitter"},
		{svg: github, href: "https://github.com/Anubis-vc", label: "Github"},
		// {svg: letterboxd, href: "https://t.co/lzV089lSvM", label: "Letterboxd"},
	];

	const links = [
		{text: "Legal", href: "#"},
		{text: "Privacy Policy", href: "#"},
		{text: "Security", href: "#"},
		{text: "Manage Cookies", href: "#"},
	];

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>

				<div className={styles.socialIcons}>
					{socials.map(link => (
						<a
							key={link.label}
							href={link.href}
							className={styles.socialLink}
							aria-label={link.label}
							target="_blank"
						>
							<img src={link.svg} alt={link.label} />
						</a>
					))}
				</div>

				<div className={styles.logoSection}>
					<span className={styles.logo}>Made by Ved Chugh</span>
					<div className={styles.copyright}>
						Find at <a href="https://github.com/Anubis-vc" target="_blank">my Github</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;