import { createContext, useEffect, useReducer, useContext } from "react";

import reducer from "./reducer";
import { fetchData } from "./utils/fetchdata";

// movie api base url
const baseUrl = "http://movieto-api.vercel.app/";

// initializing state
const initialState = {
	isUserLogin: false,
	currentPage: 1,
	movies: [],
	isLoading: true,
	randomMovie: {},
};

// creating app context
const AppContext = createContext();

// creating app provider
const AppProvider = ({ children }) => {
	// using useReducer hook
	const [state, dispatch] = useReducer(reducer, initialState);

	const getPageMovies = async () => {
		dispatch({ type: "LOADING" });

		const result = await fetchData(
			`${baseUrl}movie/all?page=${state.currentPage}`
		);

		if (result.success) {
			dispatch({
				type: "DISPLAY_MOVIES",
				payload: {
					movies: result.data,
				},
			});
		}
	};

	const changePage = (pageNo) => {
		dispatch({ type: "CHANGE_PAGE", payload: { pageNo } });
	};

	const incrementPage = () => {
		dispatch({
			type: "INCREMENT_PAGE",
			payload: { pageNo: state.currentPage + 1 },
		});
	};

	const decrementPage = () => {
		dispatch({
			type: "DECREMENT_PAGE",
			payload: { pageNo: state.currentPage - 1 },
		});
	};

	const getRandomMovie = async () => {
		const result = await fetchData(`${baseUrl}movie`);

		if (result.success) {
			dispatch({
				type: "DISPLAY_RANDOM_MOVIE",
				payload: { randomMovie: result.data },
			});
		}
	};

	useEffect(() => {
		getRandomMovie();
	}, []);

	useEffect(() => {
		getPageMovies();
	}, [state.currentPage]);

	return (
		<AppContext.Provider
			value={{ ...state, changePage, incrementPage, decrementPage }}
		>
			{children}
		</AppContext.Provider>
	);
};

// for using app context without importing useContext and then putting appContext in it. I am making a custom hook to combine both so that we only have to import this custom hook

const GlobalContext = () => useContext(AppContext);

//exporting app provider and custom hook Global Context
export { AppProvider, GlobalContext };
