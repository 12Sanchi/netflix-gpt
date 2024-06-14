import React from "react";
import Header from "./Header";
import { useState } from "react";

/* If this fn toggleSignInForm is called,it should change to a sign up form,how
   for this i will make a state var.right i need to  change my state var.,how will i create a state var.
   i will use my useState in react this will give me access to a variable let me call it as isSign in 
 let us also get to set is sign in form (setIsSIignInForm)
  by default,lets give it true,and if somebody clicks on togglesInSignInForm
 so just change it to setIsSignInForm --so whatever the value is there [isSignInForm] if it signin form change it to sign up form ,
    i am writing not of it,so if it will be true,it will be false and vice-versa*/
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  /*so atline 46 instead of sign in, i can hve my JSX, if it is isSignInForm then use the text Sign In  */
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
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
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-700"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700"
        />

        <button className="p-4 my-4 bg-red-700 w-full rounded-lg ">
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

export default Login;
