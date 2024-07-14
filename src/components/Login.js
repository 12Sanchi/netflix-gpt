import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
/* If this fn toggleSignInForm is called,it should change to a sign up form,how
   for this i will make a state var.right i need to  change my state var.,how will i create a state var.
   i will use my useState in react this will give me access to a variable let me call it as isSign in 
 let us also get to set is sign in form (setIsSIignInForm)
  by default,lets give it true,and if somebody clicks on togglesInSignInForm
 so just change it to setIsSignInForm --so whatever the value is there [isSignInForm] if it signin form change it to sign up form ,
    i am writing not of it,so if it will be true,it will be false and vice-versa*/

//1
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  //5
  const [errorMessage, setErrorMessage] = useState(null);
  //8
  const navigate = useNavigate();

  //3
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  //2
  const handleButtonClick = () => {
    //4
    //console.log(email.current.value);
    //console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    //6
    if (message) return;

    //Sign Up --Creates a new account
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          //7
          Navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //Sign in--Givves peemission to existing account
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    }
    /*so atline 46 instead of sign in, i can hve my JSX, if it is isSignInForm then use the text Sign In  */
    const toggleSignInForm = () => {
      setIsSignInForm(!isSignInForm);
    };
    /*  If i click on sign in/sign up buttton,  what should happen,let me write onclick of this Button 
  at button at top where the fn is defined after Login,here we r doing --a/q to the sign in/sign up btn,
  we can just login the user or we can sign up the user,but 1st we will validate the data,for that i will use a utility
  lets create a validate.js,will write validation logic,will write a separate fn for validation logic if v.fails itcwill
  give us the error msg,we paas email,pa. and it will check for val.FOR EMAIL VAL.WE WILL USE REGEX
   */
    return (
      <div>
        <Header />
        <div className="absolute">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="logo"
          />
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 my-2 w-full bg-gray-700"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-2 my-2 w-full bg-gray-700"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 my-2 w-full bg-gray-700"
          />

          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
          <button
            className="p-4 my-4 bg-red-700 w-full rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign Up Now!!"}
          </p>
        </form>
      </div>
    );
  };
};
export default Login;
