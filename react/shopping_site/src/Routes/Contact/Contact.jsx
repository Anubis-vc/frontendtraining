import { useState } from "react";
import styles from "./contact.module.css";
import mail from "../../assets/ContactPage/mail.png";
import phone from "../../assets/ContactPage/phone.png";
import map from "../../assets/ContactPage/map.png";

function Contact () {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [errors, setErrors] = useState({
		name: "",
		email: "",
		message: "",
	});

	const isValidEmail = email => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(email);
	};

	const isValidAll = () => {
		return (
			formData.name.trim() != "" &&
			formData.email.trim() != "" &&
			isValidEmail(formData.email) &&
			formData.message.trim() != ""
		);
	};

	const validateField = (name, value) => {
		let error = "";

		switch(name) {
			case "name":
				if (value.trim() === "") {
					error = "Name is required";
				}
				break;
			case "email":
				if(value.trim() === "") {
					error = "Email is required";
				}
				else if (!isValidEmail(value)) {
					error = "Please enter a valid email";
				}
				break;
			case "message":
				if (value.trim() === "") {
					error = "Message is required";
				}
				break;
			default:
				break;
		}

		setErrors(prev => ({
			...prev,
			[name]: error
		}));
	};

	const handleChange = e => {
		const {name, value} = e.target;
		setFormData(prev => ({
			...prev, [name]: value
		}));
		validateField(name, value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (isValidAll()) {
			e.target.reset();
			setFormData({ name: "", email: "", message: "" });
		}
	}

	return (
		<div className="main-container">
			<div className={styles.contactMain}>
				<h1>We're here for you!</h1>
				<div className={styles.contactContainer}>
					<form className={styles.form} onSubmit={handleSubmit}>
						<label className={styles.label} htmlFor="name">Name</label>
						<input 
							className={`${styles.input} ${errors.name ? styles.error : ""}`}
							type="text"
							id="name"
							name="name"
							placeholder="Your Name"
							value={formData.name}
							onChange={handleChange}
						/>
						{errors.name && <span className={styles.errorText}>{errors.name}</span>}
						
						<label className={styles.label} htmlFor="email">Email</label>
						<input
							className={`${styles.input} ${errors.email ? styles.error : ""}`}
							type="email" 
							id="email"
							name="email"
							placeholder="Your Email"
							value={formData.email}
							onChange={handleChange}
						/>
						{errors.email && <span className={styles.errorText}>{errors.email}</span>}
						
						<label className={styles.label} htmlFor="message">Message</label>
						<textarea 
							className={`${styles.textarea} ${errors.message ? styles.error : ""}`}
							name="message"
							id="message"
							placeholder="Your Message"
							value={formData.message}
							onChange={handleChange}
						/>
						{errors.message && <span className={styles.errorText}>{errors.message}</span>}

						<button 
							className={styles.button}
							type="submit"
							disabled={!isValidAll()}
						>
							Send
						</button>
					</form>

					<div className={styles.contactInfo}>
						<h2>Contact Information</h2>
						<p>
							<img src={mail} alt="email" />
							<a href="mailto:support@example.com">
								support@example.com
							</a>
						</p>
						<p>
							<img src={phone} alt="phone" />
							<a href="tel:+1234567890">(123) 456-7890</a>
						</p>
						<p>
							<img src={map} alt="location" />
							123 Fake Avenue, Fake City, USA
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;