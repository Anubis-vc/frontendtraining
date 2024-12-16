import { useState } from 'react';
import Fieldset from './Fieldset';

export default function Form({
	isEditingEducation
	, setisEditingEducation
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
			<FieldSet
				legend="education"
				filled={educationalExpFilled}
				isEditing={isEditingEducation}
				setEditing={setisEditingEducation}
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
					)
				})}
			</FieldSet>
		</form>
	)
}