import { useRef, useState } from "react";
import Header from "./Header";
import { ValidateLogin } from "../Utills/ValidateLogin";

const Login = () =>{

    const[isSignup,setisSignup] = useState(false);

    const[signTitle,setSignTitle] = useState("Sign In");

    const[errorMessage,setErrorMessage] = useState(null);

    const[errorPopupFalg,setErrorPopUpFlag] = useState(false);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () =>{
        console.log(email.current.value);
        console.log(password.current.value);
        setErrorMessage(ValidateLogin(email.current.value,password.current.value));
        // const resp = ValidateLogin(email.current.value,password.current.value);
        // console.log(resp);
        if(errorMessage == null) {
            setErrorPopUpFlag(false);
        }else{
setErrorPopUpFlag(true);
        }
    }

    const closePopUp = () =>{
        setErrorPopUpFlag(!setErrorPopUpFlag);
    }


    const onSignup = ()=>{
        setisSignup(!isSignup);
        if(isSignup){
            setSignTitle("Sign In")
        }else{
            setSignTitle("Sign Up") 
        }
    }
{}    const backgroundImageStyle = {
        backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh", // 100% of the viewport height
      };
    return(
        <div className="w-full h-full" style={backgroundImageStyle}>
        <Header />
        <form onSubmit={(e)=>e.preventDefault()} className="w-4/12 h-3/4 bg-black absolute px-20 py-20 my-24 mx-auto right-0 left-0 flex-col text-white bg-opacity-80">
            <h1 className="text-3xl py-4">{signTitle}</h1>
            {isSignup && (
                 <input type="text" placeholder="Name" className="bg-gray-700 w-full h-12 my-4 px-4 font-medium rounded-lg text-sm"></input>
            )}
           
            <input ref={email} type="email" placeholder="Email" className="bg-gray-700 w-full h-12 my-4 px-4 font-medium rounded-lg text-sm"></input>
            <input ref={password} type="password" placeholder="Password" className="bg-gray-700 w-full h-12 my-2 px-4 font-medium rounded-lg text-sm"></input>
            <div>
            <button onClick={handleButtonClick} type="button" className="w-full h-12 my-4 text-white bg-red-800 hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2
             dark:bg-red-800 dark:hover:bg-red-700 dark:focus:ring-red-700 dark:border-red-700">{signTitle}</button>
            </div>
            <div className="my-4 flex flex-row">
                <div className="text-gray-500 text-sm">
               {
                isSignup ? "Already Registered User" : "New to Netflix?"
               } 
                </div>
                <div onClick={onSignup} className="text-sm">
                {isSignup ? "Sign In" : "Sign Up Now"};
                </div>
            </div>

            
            
        </form>
{errorPopupFalg && <div className="w-2/6 h-20 bg-gray-600 text-white flex flex-col justify-center items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <div>{errorMessage}</div>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={closePopUp}>
  OK
</button>
</div>}

        
        </div>
    )
}

export default Login;
