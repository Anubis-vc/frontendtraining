import { useState } from 'react';
import Fieldset from './Fieldset.jsx';
import Contact from './Contact.jsx'
import Education from './Education.jsx'
// import Practical from './Practical.jsx';

export default function Form({
	isEditingContact
	, isEditingEducation
	// , isEditingPractical
	, setIsEditingContact
	, setIsEditingEducation
	// , setIsEditingPractical
}) {
	const [contactInfo, setContactInfo] = useState({
		name: ''
		, email: ''
		, phone: ''
	});
	const [educationalExp, setEducationalExp] = useState([
		{
			school: ''
			, title: ''
			, from: ''
			, to: ''
		}
	]);

	const handleContactChange = e => {
		const key = e.target.name;
		setContactInfo({...contactInfo, [key]: e.target.value});
	}

	const handleExpChange = (e, index, expType, setExpType, remove=false) => {
		if (remove) {
			setExpType(expType.toSpliced(index, 1));
			return;
		}

		const key = e.target.name;
		const newExp = [...expType];
		newExp[index] = {
			...newExp[index]
			, [key]: e.target.value
		};
		setExpType(newExp);
	};

	const contactInfoFilled = Object.values(contactInfo).every(value => value !== '');

	const educationalExpFilled = educationalExp.every(exp => {
		return Object.values(exp).every(value => value !== '');
	});

	const contactLegend = document.querySelector('.contact');
	if (contactLegend) {
		if (!isEditingContact) {
			contactLegend.style.display = "none";
		}
		else {
			contactInfo.style.display = "block";
		}
	}

	return (
		<form>
			<Fieldset
				legend="contact information"
				filled={contactInfoFilled}
				isEditing={isEditingContact}
				setEditing={setIsEditingContact}
			>
				<Contact
					isEditingContact={isEditingContact}
					contactInfoHandler={handleContactChange}
					contactInfo={contactInfo}
				/>
			</Fieldset>
			<Fieldset
				legend="education"
				filled={educationalExpFilled}
				isEditing={isEditingEducation}
				setEditing={setIsEditingEducation}
				addEducation={exp => setEducationalExp([...educationalExp, exp])}
			>
				{educationalExp.map((exp, i) => {
					return (
						<Education
							key={i}
							index={i}
							isEditingEducation={isEditingEducation}
							educationHandler={(e, index, remove) =>
								handleExpChange(
									e
									, index
									, educationalExp
									, setEducationalExp
									, remove
								)
							}
							education={exp}
						/>
					);
				})}
			</Fieldset>
		</form>
	);
}