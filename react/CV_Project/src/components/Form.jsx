import { useState } from 'react';
import Fieldset from './Fieldset.jsx';
import Education from './Education.jsx'

export default function Form({
	isEditingEducation
	, setIsEditingEducation
}) {
	const [educationalExp, setEducationalExp] = useState([
		{
			school: ''
			, title: ''
			, from: ''
			, to: ''
		}
	]);

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

	const educationalExpFilled = educationalExp.every(exp => {
		return Object.values(exp).every(value => value !== '');
	});

	return (
		<form>
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