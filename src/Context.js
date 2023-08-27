import { createContext, useContext, useReducer} from "react";

import { reducer } from "./Reducer";

const initialState = {
    page: 1,
    images: [],
    isLoading: false,
    input: ''
}

const apikey = process.env.REACT_APP_API_KEY;

const AppContext = createContext();


const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const increasePage = async (value) => {
        dispatch({ type: 'TOGGLELOADING' })
        dispatch({ type: "INCREASEPAGE" });
        const page = state.page + 1
        const url = `https://pixabay.com/api/?key=${apikey}&q=${value}&image_type=photo&page=${page}&per_page=12`
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: "SETDATA", data })
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        dispatch({ type: 'TOGGLELOADING' });
    }

    const decreasePage = async (value) => {
        dispatch({ type: 'TOGGLELOADING' })
        dispatch({ type: "DECREASEPAGE" });
        const page = state.page - 1
        const url = `https://pixabay.com/api/?key=39028098-343f95f5e9393b8130e282d9f&q=${value}&image_type=photo&page=${page}&per_page=12`
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: "SETDATA", data })
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        dispatch({ type: 'TOGGLELOADING' });
    }

    const takeInputAndMakeApiCall = async (input) => {
        dispatch({ type: 'TOGGLELOADING' });
        const url = `https://pixabay.com/api/?key=39028098-343f95f5e9393b8130e282d9f&q=${input}&image_type=photo&page=${state.page}&per_page=12`
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: "SETDATA", data })
        dispatch({ type: 'TOGGLELOADING' })

    }

 

    return (
        <AppContext.Provider value={{
            state,
            takeInputAndMakeApiCall,
            increasePage,
            decreasePage
        }}>
            {children}
        </AppContext.Provider>
    )
}

export  {AppProvider, AppContext}


export const useGlobalContext = () => {
    return useContext(AppContext)
}



