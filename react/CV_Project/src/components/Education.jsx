import Input from './Input';
import DataField from './DataField';
import Icon from '@mdi/react';
import { mdiMinusBox } from '@mdi/js';
import { formateDate } from '../utils';

/*
	Educational experience portion of CV. 
	If fieldset in editing mode, input elements show
	Otherwise, normal data displayed

	{number} index = index of educational expxerience
	{boolean} isEditingEducation = indicates whether education is in editing mode
	{function(event, number, boolean)} educationHandler = function to handle input change
	{object} education = object representing education
*/

export default function Education({
	index
	, isEditingEducation
	, educationHandler
	, education
}) {
	const fields = [
		{
			type: 'text'
			, label: 'school name'
			, placeholder: 'e.g. University of Maryland'
			, data: education.title
		}
		, {
			type: 'text'
			, label: 'field of study'
			, placeholder: 'e.g. B.Sc. Computer Science'
			, data: education.title
		}
		, {
			label: 'from'
			, data: education.from
		}
		, {
			label: 'to'
			, data: education.to
		}
	];

	if (isEditingEducation) {
		return (
			<div className="experience experience-editing" data-index={index}>
				<Icon
					onClick={e => educationHandler(e, index, true)}
					className="remove no-print"
					title="Remove education"
					path={mdiMinusBox}
					size={1} 
				/>
			{fields.map((input, i) => {
				if (i <= 1) {
					return (
						<Input
							key={input.label}
							type={input.type}
							label={input.label}
							placeholder={input.placeholder}
							onChange={e => educationHandler(e, index)}
							data={education}
						/>
					);
				}
			})}
			{fields.map((input, i) => {
				if (i < 1) {
					return (
						<Input
							key={input.label}
							type="month"
							label={input.label}
							onChange={e => educationHandler(e, index)}
							data={education}
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
					onClick={e => educationHandler(e, index, true)}
					className="remove no-print"
					title="Remove Education"
					path={mdiMinusBox}
					size={1}
				/>
				<p className="from-to">
					{formateDate(fields[2].data)} &mdash;{' '}
					{formateDate(fields[3].data)}
				</p>
				{fields.map((input, i) => {
					if (i < 2) {
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