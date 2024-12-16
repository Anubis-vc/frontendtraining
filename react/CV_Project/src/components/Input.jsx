/*
	Render labeled input in container

	{string} type = input type
	{string} label = text
	{string} placeholder
	{function(onChange)} onChange
	{object} data = data associated with input
*/

export default function Input({
	type
	, label
	, placeholder
	, onChange
	, data
}) {
	const name = label.split(' ')[0];
	const id = crypto.randomUUID();

	return (
		<div className="field">
			<label htmlFor={id}>{label}</label>
			<input 
				type={type}
				value={data[name]}
				id={id}
				name={name}
				placeholder={placeholder}
				onChange={onChange}
				aria-required="true"
				autoComplete="on"
			/>
		</div>
	);
}