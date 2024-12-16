/* 
 Rendering a button with params:

 {string} text = text within button
 {string} experience
 {boolean} isDisabled
 {boolean} allComplete = checks if all related text fields are filled
 {function(boolean)} setEdit = Function that changes teh state of the related fieldset
	so user can go back to editing. 
*/

export default function Button({
	text
	, experience
	, isDisabled
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
			experience={experience}
			className={text + ' no-print'}
			isDisabled={isDisabled}
			onClick={handleButtonClick}>
				{text}
			</button>
	);
}