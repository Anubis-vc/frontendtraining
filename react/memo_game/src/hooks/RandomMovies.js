const fetchPosters = async () => {
	const response = await fetch(
		'https://api.movieposterdb.com/v1/random/movies?items=10',
		{
			method: 'GET',
			headers: {
				'Authorization': 'Bearer 448|FXQa4KbRAlvBfUAAHQuDSdlUfvOsdRL7mOYPx9yr',
				'Content-Type': 'application/json',
			},
		}
	);

	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}
	return response.json();
};

export default fetchPosters;