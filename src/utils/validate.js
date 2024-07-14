export const checkValidData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

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
----NOW I WILL USE MY CHECKVALIDATE  FN  


now 5th i will my error msg lets create a p tag,i will create a state var. later on,to have the err.
msg's i will create a state var.lets use a state var. to store that err. msg and i will use my usestate
--------USEREF IS USED TO REFERENCE A FIELD OVER HERE,BASICALLY A TAG OVER HERE,and here we want to store 
some err. msg so we r creating a useState var.--useState() let is give the value as null 
---AFTER ALL THIS VALIDATION NOW I CAN PROCEED  */

/*   WE will be building authentication we need a backened & for 
backened we will use google firebase---firebase.google.com, i would be 
using firebase for building authenticationit makes our life easy,u can build 
it yourself in node.js or some backened lib,many startups use firebase 
as backened + u can build a fully  fledged application which can have a back end 
authenticate which can have a user login & once you log in then only u log in then
only you can enter inside 

What do you want to use as your public directory?--Build---when we ere doing parcel we had a dist folder 
where we build up our project whre all the bundld files,production ready files go to that folder
SIMILARLY IN CCREATE REACT APP WE HAVE BUILD FOLDER so plz name it as build---- where is this build cmd,
how do we check,wehave package.json we already have build cmd,build cmd will already run some scripts,
create react app already gave us build cmd,it is creating optimised productyion build for our project 
JUST 3 CMD AND OUR APP WILL DEPLOY ON FIREBASE 
1-Install firebase CLI-npm install-g firebase-tools
2-Firebase Login- firebase login 
3-Initialize Firebase-firebase init,then select Hosting
4-Deploy cmd-firebase deploy

Again in login.js ----password authentiation--or u can wrte if my msg is null then write th sign in or
 sign up logic --if my msg is there i want to return, means if my Email ID is not valid or Password is
  not valid,if my msg is present 
then just return don't go ahead, why do i return,i dont want program to go ahead of this right  
return from this sta.itself otherwise sign in and sign up the user
--i have put not here means sign up form
Now go to firebase docs-build-web-c/v import get auth in Login.js
if u would see in firebase docs all these api's like--createUserWithEmailAndPassword
will need auth,and  this auth comes from getAuth,if u have to call any api,u will have to 
pass this  auth with Email ID ---NOW CALLING THIS const auth = getAuth();
ONCE IN firebase.js --now copy the logic,
createUserWithEmailAndPassword(auth, email, password) is an api that gives u promise and it is 
handling promise with then obj & it is catching error NOW C/V THE LOGIC IN SIGUP SECTION
-----IF the USER SIGN UP/SIGN IN WE  WILL GET THIS USER OBJ,AND I HAVE TO KEEP THE USER OBJ WITH US BCOZ I CAN NEED 
THIS USER OBJ ANYWHERE IN THE APP ,AS soon as the uuser sign in/sign up i will add ll the data to mine redux store 
and will navigate the user to my browse page 
npm i -D @redux/toolkit
npm i react-redux
now lets build store now i will create ppStore,there is something knownnas CofigureStore
what does this store takes..takes up a config.this config will have a reducer and this reducer will have
diff reducer from diff slices and we will just export our default appStore,let  us create a slice
 ,userSlice .....now inthis createSlice what alll info do we have first is name--user and then initialstate and then we will also
  add reducers and then we will add diff types of reducerfunct.lets add a addUser as soon as we login 
  this reducer action will be disptched,we will disptch addUser andd we will addd user to our redux store and we will also create removeuser 
  suppose the user signout then this  usr also should remove mineobj,lets add user state 
now i will export these and will import userReducer in appStore,now i  have to provide my store to my app   
on the root of my appl. i will provide my store, i will add my store over here, i can just import my provider--
comes from react/redux 

i created a store,then i created a slicw,then added the slice reducer to my store,and then i am providing my store  
as soon as user signs in/sign up like in my SIGN UP form, i have createUser api,as soon as i created  my user,if its 
success then here i  can dispatch an action from herre and then i have to dispatch an action from SIGN IN form also so instaed of ddispatching an 
action here and there,WE WILL USE A UTILITY WHICH IS GIVEN TO US BY FIREBASE,  onauthstatechange-This api is called Whenever the user sign 
in/whenever the user sign up whenever the user sign out,Whenever THERE IS AUTHENTICATION CHANGE--this is kind of  like event
 listener--i want to call this api only once --firebase-build-web-manage users passte it in Body.js




*/
