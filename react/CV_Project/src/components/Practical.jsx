import Input from './Input';
import DataField from './DataField';
import Icon from '@mdi/react';
import {mdiMinusBox} from '@mdi/js';
import {formatDate} from '../utils'
import '../styles/Practical.css'

/* 
	Render practical experience

	{number} index 
	{boolean} isEditingPractical
	{function(event, number, boolean)} practicalHandler - A function that calls another function
		to handle input hange
	{object} practicalExp
*/

export default function Practical({
	index
	, isEditingPractical
	, practicalHandler
	, practicalExp
}) {
	const inputFields = [
		{
			label: 'position title'
			, placeholder: 'e.g. Data Engineer'
			, data: practicalExp.position
		}
		, {
			label: 'company name'
			, placeholder: 'e.g. Google'
			, data: practicalExp.company
		}
		, {
			label: 'main responsibilities'
			, data: practicalExp.responsibilities
		}
		, {
			label: 'from'
			, data: practicalExp.from
		}
		, {
			label: 'to'
			, data: practicalExp.to
		}
	];

	if (isEditingPractical) {
		const id = crypto.randomUUID();
		return (
			<div className="experience experience-editing" data-index={index}>
				<Icon
					className="remove no-print"
					title="Remove position"
					path={mdiMinusBox}
					size={1}
					onClick={e => practicalHandler(e, index, true)}
				/>
				{inputFields.map((input, i) => {
					if (i <= 1) {
						return (
							<Input
								key={input.label}
								type="text"
								label={input.label}
								placeholder={input.placeholder}
								data={practicalExp}
								onChange={e => practicalHandler(e, index)}
							/>
						);
					}
				})}
				<div className="field">
					<label htmlFor="{id}">main responsibilities</label>
					<textarea
						name="responsibilities"
						id={id}
						className="responsibilities"
						value={practicalExp.responsibilities}
						placeholder="Note: separate responsibilities with newline for bullet points"
						onChange={e => practicalHandler(e, index)}
						aria-required="true"
						autoComplete='on'
					>
					</textarea>
				</div>
				{inputFields.map((input, i) => {
					if (i > 2) {
						return (
							<Input
								key={input.label}
								type="month"
								label={input.label}
								data={practicalExp}
								onChange={e => practicalHandler(e, index)}
							/>
						);
					}
				})}
			</div>
		);
	}
	else {
		return (
			<div className="experience experience-submitted">
				<Icon
					className="remove no-print"
					title="Remove position"
					path={mdiMinusBox}
					onClick={e => practicalHandler(e, index, true)}
					size={1}
				/>
				<p className="from-to">
					{formatDate(inputFields[3].data)} &mdash;{' '}
					{formatDate(inputFields[4].data)}
				</p>
				{inputFields.map((input, i) => {
					if (i < 3) {
						return (
							<DataField
								key={input.label}
								label={input.label}
								data={input.data}
							/>
						);
					}
				})}
			</div>
		);
	}
}