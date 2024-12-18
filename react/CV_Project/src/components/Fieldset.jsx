import { useEffect, useState } from 'react';
import Icon from '@mdi/react';
import { mdiPlusBox } from '@mdi/js';
import Button from './Button';
import '../styles/Fieldset.css';

/*
	Render fieldset
	{string} legend
	{ReactNode} children = input/data fields to be rendered
	{bool} filled = are all fields in fieldset filled
	{bool} isEditing = is fieldset in editing mode
	{function(bool)} setEditing = call state setter to update editing mode
	{function(Object)} addEdication = add new block of education
	{function(Object)} addPractical = add new block of practical
*/

export default function Fieldset({
	legend
	, children
	, filled
	, isEditing
	, setEditing
	, addEducation
	, addPractical
}) {
	const [editBtnDisabled, setEditBtnDisabled] = useState(true);
	const [submitBtnDisabled, setSubmitBtnDisabled] = useState(true);

	useEffect(() => {
		if (isEditing) {
			setEditBtnDisabled(true);
			setSubmitBtnDisabled(!filled);
		}
		else {
			setEditBtnDisabled(false);
			setSubmitBtnDisabled(true);
		}
	}, [isEditing, filled]);

	// handle adding new experience
	function addMoreExperience() {
		let editBtn;
	
		if (legend === 'education') {
			editBtn = document.querySelector('[data-exp="education"]');

			addEducation({
				school: ''
				, title: ''
				, from: ''
				, to: ''
			});
		}
		else {
			editBtn = document.querySelector('[data-exp="experience"]');

			addPractical({
				company: ''
				, position: ''
				, responsibilities: ''
				, from: ''
				, to: ''
			});
		}
		editBtn?.click();
	};

	// Display button to add new block
	const displayAddButton = () => {
		if (legend === 'education' || legend === 'experience') {
			const title = legend === 'education' ? 'Add education' : 'Add position';

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
		return null;
	}

	return (
		<fieldset>
			<legend
				className={legend.split(' ')[0] === 'contact' ? 'contact' : undefined}>
				<span
					className='first-letter'>{legend[0]}</span>
					<span className='remaining-letters'>{legend.slice(1)}</span>
			</legend>
			<div className="fields">{children}</div>
			{displayAddButton()}
			<div className="buttons">
				<Button
					text="edit"
					experience={legend.split(' ')[0]}
					btnDisabled={editBtnDisabled}
					allComplete={filled}
					isEditing={isEditing}
					setEdit={setEditing}
				/>
				<Button
					text="submit"
					btnDisabled={submitBtnDisabled}
					allComplete={filled}
					isEditing={isEditing}
					setEdit={setEditing}
				/>
			</div>
		</fieldset>
	);
};