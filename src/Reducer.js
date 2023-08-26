
export const reducer = (state, action) => {
    if (action.type === "SETDATA") {
        return {
            ...state,
            images: action.data.hits
     }
    }
    
    if (action.type === "TOGGLELOADING") {
        return {
            ...state,
            isLoading: !state.isLoading
        }
    }

    if (action.type === "INCREASEPAGE") {
        return {
            ...state,
            page: state.page + 1
        }
    }

       if (action.type === "DECREASEPAGE") {
        return {
            ...state,
            page: state.page - 1
           }
    }

    return state
}