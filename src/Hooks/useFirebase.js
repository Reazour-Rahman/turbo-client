import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  getIdToken,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAdmin, setErrorMessage, setIsLoading, setIsLogin, setUser } from "../reducers/slices/firebaseSlice";
import initializationAuthentication from "../Pages/Authentication/firebase/firebase.init";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';


initializationAuthentication();
const cookies = new Cookies();


const logout = () => {
  cookies.remove("token");
  cookies.remove('userId');
  cookies.remove('username');
  cookies.remove('fullName');
  cookies.remove('avatarURL');
  cookies.remove('hashedPassword');
  cookies.remove('phoneNumber');

  window.location.reload();
}
const useFirebase = () => {
  // const dispatch = useDispatch()
  // const user = useSelector((state) => state.firebase.user)
  // const navigate = useNavigate()

  // console.log(user);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  // const [isSignup, setIsSignup] = useState(true);




  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  };

  // const createAccountWithGoogle = (email, password) => {
  //   return createUserWithEmailAndPassword(auth, email, password);
  // };

  const signUpWithEmailAndPass = (name, email, password, image, mobileNumber, gender, url,  handleClose) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginWithEmailAndPassword = (email, password,handleClose) => {
   return signInWithEmailAndPassword(auth, email, password)
  };



  // checking admin

  // useEffect( () => {
  //   fetch(`http://localhost:5000/users/${user?.email}`)
  //   .then(res => res.json())
  //   .then(data =>  dispatch(setAdmin(data?.admin)))
  // },[user?.email])



  const saveUser = (email, name, method) => {
    const user = { email, name, room:{}, followersCount: 0, followers:[] , followingsCount : 0, followings :[]}
    fetch('https://aqueous-chamber-45567.herokuapp.com/users', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
  }

 

  return {
    signInWithGoogle,
    updateProfile,
    auth,
    loginWithEmailAndPassword,
    signOut,
    signUpWithEmailAndPass,
    saveUser,
    onAuthStateChanged,
    getIdToken
  };
};

export default useFirebase;