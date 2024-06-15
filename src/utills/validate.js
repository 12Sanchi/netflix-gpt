export const checkValidData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";
  //^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$

  return null;
};
/* this checkValidData fn will check for validation,will take email and paasword now 
let me have constant isEmailValid +  i will have this regex so u can do write the 
regex dot test after that write line 16 in login.js 
const handleButtonClick = () => {
    
  };
 throws err-email,paa.not defined--comment //checkValidData(email, password); now if 
 if user type email and password how will i get this data,1st way u can have a state var.
 u can bind that var.along with that input box as soon i am typing on the input box that 
 var.data will be change so either u can create state var.either u can create reference 
 of those input boxes suppose when u click on the btn handleButtonClick i want to find 
 what is inside there my input box,i need a ref.to this input box and that ref is created 
 by react using useref hook now how do i use my useref hook i 
 will do ----const email = useRef();--initial value as useRef(null); same for pass. --this
r basiclly the ref. it will create a ref. now i want to refer it to my input box,i will do
 a ref & i will add my e mail same for pass.this will help us  get THE REF TO THIS INPUT BOX
 NOW IF SOMEBODY CLICK ON handleButtonClick i want to get that data lets console log  
 now consiole.log(email) will refresh the page a sit is a form it calls the onSubmit method 
 we dont have a method so it is refereshing so i will  have to use preventdefault so when u r
clicking that sign in btn it is trying to submit the form so i wnt to stop it to submit it,i 
dont want to submit the form rightaway so in console we get the values--this is what useref is
as we have email-we can do email.current.value so ---email.current is referring to my input 
box and .value isb giving my value to the input box as objects-these basically
gives u the reference of that input box as a form of an obj 
once i got email once i got pass.--THIS IS WHAT USEREF IS
----NOW I WILL USE MY CHECKVALIDATE  FN  */
