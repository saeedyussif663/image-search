import { createContext, useContext, useReducer} from "react";

import { reducer } from "./Reducer";

const initialState = {
    page: 1,
    images: [],
    isLoading: false,
    input: ''
}

const AppContext = createContext();


const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const incresePage = () => {
        dispatch({ type: "INCREASEPAGE" });
        takeInputAndMakeApiCall()
    }

    const decreasePage = () => {
        dispatch({ type: "DECREASEPAGE" });
        takeInputAndMakeApiCall()
    }

    const takeInputAndMakeApiCall = async (input) => {
        dispatch({ type: 'TOGGLELOADING' })
        const url = `https://pixabay.com/api/?key=39028098-343f95f5e9393b8130e282d9f&q=${input}&image_type=photo&page=${state.page}&per_page=12`
        const response = await fetch(url);
        const data = await response.json();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        dispatch({ type: "SETDATA", data })
        dispatch({ type: 'TOGGLELOADING' })

    }

 

    return (
        <AppContext.Provider value={{
            state,
            takeInputAndMakeApiCall,
            incresePage,
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



