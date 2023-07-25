const fetchData = async (url) => {
	let data = null;
	console.log(url);

	const response = await fetch(url);

	if (response.status != 200) {
		return {
			success: false,
			error: { status: response.status, error: response.statusText },
		};
	}

	data = await response.json();
	return { success: true, data };
};

export { fetchData };
