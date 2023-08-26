import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import { useGlobalContext } from "../Context";

const Form = () => {
    const {  takeInputAndMakeApiCall } = useGlobalContext();
    const [isShowing, setIsShowing] = useState(false);
    const [userInput, setUserInput] = useState('');


    const navigate = useNavigate()
    
    
    
    const handleActions = () => {
        if (userInput.trim() !== '') {
            setIsShowing(true)
        } else {
            setIsShowing(false)
        }
    }
     const handleChange = (e) =>{
        setUserInput(e.target.value)
    }

    useEffect(() => {
        handleActions();
    },  [handleChange])

   

    const clearInput = () => {
        setUserInput('')
    }

    const sendData = () => {
        takeInputAndMakeApiCall(userInput);
        navigate('/search-results');
        setUserInput('')
    }

    return (
         <form className="w-11/12 mx-auto md:w-3/6 relative">
                <input type="text" placeholder="search over 1 million images"
                    className="rounded-full w-full px-6 py-3 focus:outline-none bg-transparent placeholder:text-white focus:placeholder-transparent border-2 border-white focus:bg-white"
                    value={userInput}
                    onChange={handleChange}
                />
                {isShowing &&  
                    <>
                    <i className="fa-solid fa-xmark absolute top-3 right-16 cursor-pointer text-blue-900 text-2xl"
                        onClick={clearInput}
                        >
                    </i>
                    <i className="fa-solid fa-circle-right absolute top-3 right-5 cursor-pointer text-blue-900 text-2xl"
                        onClick={sendData}
                        >
                    </i>
                    </>
                }
            </form>
    )
}


export default Form