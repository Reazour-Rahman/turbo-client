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
  const dispatch = useDispatch()
  const user = useSelector((state) => state.firebase.user)
  // const navigate = useNavigate()

  // console.log(user);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const [isSignup, setIsSignup] = useState(true);




  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  };

  const createAccountWithGoogle = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signUpWithEmailAndPass = (name, email, password, image, mobileNumber, gender, url,  handleClose) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async(userCredential) => {
        const user = userCredential.user;
        console.log(user);
        const URL = 'http://localhost:5000/auth';
            // const URL = 'https://medical-pager.herokuapp.com/auth';
            const { data: { token, userId, hashedPassword, fullName } } = await axios.post(`${URL}/${isSignup ? 'signup' : 'login'}`, {
                username : email, password : password, fullName: name, phoneNumber : mobileNumber, avatarURL : image,
            });
    
            cookies.set('token', token);
            cookies.set('username', email);
            cookies.set('fullName', fullName);
            cookies.set('userId', userId);
    
            if(isSignup) {
                cookies.set('phoneNumber', mobileNumber);
                cookies.set('avatarURL', image);
                cookies.set('hashedPassword', hashedPassword);
            }
    
        dispatch(setUser(user))
    
        handleClose()
        updateProfile(auth.currentUser, {
          displayName: name, phoneNumber : mobileNumber,
          photoURL : image
        })

          .then(() => {
            saveUser(email, name, 'POST')
            dispatch(setErrorMessage(''));
            
          })
          .catch((error) => {
            dispatch(setErrorMessage(error.errorMessage));
          });
        // navigate(url)
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        dispatch(setErrorMessage(errorMessage))
      })
      .finally(async() =>{ 
        dispatch(setIsLoading(false))    
      });
  }

  const loginWithEmailAndPassword = (email, password,handleClose) => {
   
     signInWithEmailAndPassword(auth, email, password)
     .then(async(res) => {

      const URL = 'http://localhost:5000/auth';
      // const URL = 'https://medical-pager.herokuapp.com/auth';
      const { data: { token, userId, hashedPassword, fullName } } = await axios.post(`${URL}/login`, {
          username : email, password : password, 
      });

      cookies.set('token', token);
      cookies.set('username', email);
      cookies.set('fullName', fullName);
      cookies.set('userId', userId);


      dispatch(setUser(res.user));
      dispatch(setIsLogin(false));
    
      // navigate(url);
      dispatch(setErrorMessage(""));
      handleClose();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      dispatch(setErrorMessage(errorMessage));
      dispatch(setIsLogin(false));
    })
    .finally(() => {
      dispatch(setIsLoading(false));
    });
  };



  // checking admin

  useEffect( () => {
    fetch(`http://localhost:5000/users/${user?.email}`)
    .then(res => res.json())
    .then(data =>  dispatch(setAdmin(data?.admin)))
  },[user?.email])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getIdToken(user)
          .then(idToken => localStorage.setItem('idToken', idToken));
        // setUser(user);



        // console.log(user);
        dispatch(setUser(user))
      } else {
        // nothing was here 
        setUser({});
      }
      dispatch(setIsLoading(false));
    });
  }, [auth, dispatch])

  const saveUser = (email, name, method) => {
    const user = { email, name, room:[] }
    fetch('http://localhost:5000/users', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
  }

  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUser({}));
        logout()
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };

  return {
    signInWithGoogle,
    createAccountWithGoogle,
    loginWithEmailAndPassword,
    logOut,
    signUpWithEmailAndPass,
    saveUser,
    user
  };
};

export default useFirebase;