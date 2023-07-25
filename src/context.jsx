import {
	useState,
	createContext,
	useEffect,
	useReducer,
	useContext,
} from "react";

import reducer from "./reducer";

// movie api base url
const baseUrl = "https://movieto-api.vercel.app/";

// initializing state
const initialState = {
	isUserLogin: false,
};

// creating app context
const AppContext = createContext();

// creating app provider
const AppProvider = ({ children }) => {
	// using useReducer hook
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<AppContext.Provider value={{ ...state }}>
			{children}
		</AppContext.Provider>
	);
};

// for using app context without importing useContext and then putting appContext in it. I am making a custom hook to combine both so that we only have to import this custom hook

const GlobalContext = useContext(AppContext);

//exporting app provider and custom hook Global Context
export { AppProvider, GlobalContext };
