const reducer = (state, action) => {
	if (action.type === "LOADING") {
		return { ...state, isLoading: true };
	}

	if (action.type === "DISPLAY_MOVIES") {
		return { ...state, movies: action.payload.movies, isLoading: false };
	}

	if (action.type === "CHANGE_PAGE") {
		return { ...state, currentPage: action.payload.pageNo };
	}

	if (action.type === "DISPLAY_RANDOM_MOVIE") {
		return { ...state, randomMovie: action.payload.randomMovie };
	}

	if (action.type === "INCREMENT_PAGE") {
		return { ...state, currentPage: action.payload.pageNo };
	}

	if (action.type === "DECREMENT_PAGE") {
		return { ...state, currentPage: action.payload.pageNo };
	}

	return state;
};

export default reducer;
