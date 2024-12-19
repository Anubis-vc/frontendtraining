import Input from './Input'
import DataField from './DataField'

/*
	Render all the contact/general info

	{boolean} isEditingContact = Indicates if this is in editing mode
	{function(ChangeEvent)} generalInfoHandler = Updates generalInfo on input change
	{object} contactInfo = Data
*/

export default function contactInfo ( {
	isEditingContact
	, contactInfoHandler
	, contactInfo
}) {
	const inputFields = [
		{
		  type: 'text',
		  label: 'name',
		  placeholder: 'Your name here',
		  data: contactInfo.name,
		},
		{
		  type: 'email',
		  label: 'email address',
		  placeholder: 'someone@example.com',
		  data: contactInfo.email,
		},
		{
		  type: 'tel',
		  label: 'phone number',
		  placeholder: 'Your phone number',
		  data: contactInfo.phone,
		},
	  ];

	if (isEditingContact) {
		return (
			<div className="contact">
				{inputFields.map(input => 
					<Input
						key={input.label}
						type={input.type}
						label={input.label}
						placeholder={input.placeholder}
						data={contactInfo}
						onChange={contactInfoHandler}
					/>
				)}
			</div>
		);
	}
	else {
		return (
			<div className="contact">
				<DataField label="name" data={contactInfo.name} />
				<div>
					<DataField label="email address" data={contactInfo.email}/>
					<span>|</span>
					<DataField label="phone number" data={contactInfo.phone}/>
				</div>
			</div>
		);
	}
}