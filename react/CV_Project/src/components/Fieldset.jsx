import { useEffect, useState } from 'react';
import Icon from '@mdi/react';
import { mdiPlusBox } from '@mdi/js';
import Button from './Button';
import '../styles/Fieldset.css';

export default function Fieldset({
	legend,
	children,
	filled,
	isEditing,
	setIsEditingCaller,
	addEducationalExpHandler,
	addPracticalExpHandler,
}) {
	const [editButtonDisabled, setEditButtonDisabled] = useState(true);
	const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

	// I'm using Effect hook to avoid infinite rendering.
	useEffect(() => {
		/**
		 * Disable/enable edit/submit buttons based on whether
		 * the fieldset is in editing mode and if the fields are filled.
		 */
		if (isEditing) {
			setEditButtonDisabled(true);
			if (filled) {
				setSubmitButtonDisabled(false);
			} else {
				setSubmitButtonDisabled(true);
			}
		} else {
			setEditButtonDisabled(false);
			setSubmitButtonDisabled(true);
		}
	}, [isEditing, filled]);

	/**
	 * Displays an svg button to add a new block of experience
	 * (EducationalExp/PracticalExp component instance)
	 * and gives it an appropriate title.
	 *
	 * @returns {JSX.Element}
	 */
	const displayAddButton = () => {
		if (legend === 'education' || legend === 'experience') {
			const title =
				legend === 'education'
					? 'Add education'
					: 'Add position';

			return (
				<Icon
					onClick={addMoreExperience}
					className="add no-print"
					title={title}
					path={mdiPlusBox}
					size={1}
				/>
			);
		}
	};

	/**
	 * Handles adding a new block of experience
	 * (EducationalExp/PracticalExp component instance).
	 * Clicking 'add' button forces a click on edit button,
	 * switching the fieldset to editing mode to let users
	 * start filling in the new experience data.
	 */
	const addMoreExperience = () => {
		let editButton;

		if (legend === 'education') {
			editButton = document.querySelector('[data-exp="education"]');

			addEducationalExpHandler({
				school: '',
				title: '',
				from: '',
				to: '',
			});
		} else {
			editButton = document.querySelector('[data-exp="experience"]');

			addPracticalExpHandler({
				company: '',
				position: '',
				responsibilities: '',
				from: '',
				to: '',
			});
		}

		editButton?.click();
	};

	return (
		<fieldset>
			<legend className={legend.split(' ')[0] === 'contact' ? 'contact' : undefined}>
				<span className='first-letter'>{legend[0]}</span><span className='remaining-letters'>
					{legend.slice(1)}
				</span>
			</legend>
			<div className="fields">{children}</div>
			{displayAddButton()}
			<div className="buttons">
				<Button
					text="edit"
					experience={legend.split(' ')[0]}
					btnDisabled={editButtonDisabled}
					filled={filled}
					isEditing={isEditing}
					setEdit={setIsEditingCaller}
				/>
				<Button
					text="submit"
					btnDisabled={submitButtonDisabled}
					filled={filled}
					isEditing={isEditing}
					setEdit={setIsEditingCaller}
				/>
			</div>
		</fieldset>
	);
}