/* 
 Rendering a button with params:

 {string} text = text within button
 {string} experience
 {boolean} isdisabled
 {boolean} allComplete = checks if all related text fields are filled
 {function(boolean)} setEdit = Function that changes teh state of the related fieldset
	so user can go back to editing. 
*/

export default function Button({
	text
	, experience
	, btnDisabled
	, allComplete
	, setEdit
}) {
	const handleButtonClick = e => {
		e.preventDefault();

		if (text === 'submit' && allComplete) {
			setEdit(false);
		}
		else {
			setEdit(true);
		}
	};

	return (
		<button
			data-exp={experience}
			className={text + ' no-print'}
			disabled={btnDisabled}
			onClick={handleButtonClick}
		>
			{text}
		</button>
	);
}