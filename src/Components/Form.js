

import { useState,  useRef } from "react";
import { useGlobalContext } from "../Context";

const Form = ({ takeData}) => {
    const {  takeInputAndMakeApiCall } = useGlobalContext();
    const [isShowing, setIsShowing] = useState(false);

    const inputRef = useRef('')
    
    const handleChange = (e) => {
        inputRef.current.value = e.target.value;
        if (inputRef.current.value.trim() !== '') {
           setIsShowing(true)
        } else {
            setIsShowing(false)
       }
  }

   

    const clearInput = () => {
        inputRef.current.value = ''
        setIsShowing(false)
    }

    const sendData = () => {
        takeData(inputRef.current.value)
        takeInputAndMakeApiCall(inputRef.current.value);
        inputRef.current.value = '';
        setIsShowing(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        sendData()
    }

    return (
         <form className="w-11/12 mx-auto md:w-3/6 relative z-10" onSubmit={handleSubmit}>
                <input type="text" placeholder="search over 1 million images"
                className="rounded-full w-full px-6 py-3 focus:outline-none bg-transparent placeholder:text-white focus:placeholder-transparent border-2 border-white focus:bg-white"
                    ref={inputRef}
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