/*
	Render label properly
	Shows list if there is multiple and just the label if only one piece of data
	{string} label = label for data
	{string} data
*/

export default function DataField( {label, data} ) {
	let phrase, list;
	if (label.split(' ')[1] === 'responsibilities') {
		phrase = data.split('n');
		list = (
			<ul>
				{phrase.map(x => <li key={x}>{x}</li>)}
			</ul>
		);
	}

	return (
		<div className="data-field">
			<span className={'data ' + label.split(' ')[0]}>
				{/* show only data in case of only one item */}
				{phrase ? list : data}
			</span>
		</div>
	);
}