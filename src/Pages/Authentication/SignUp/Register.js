import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Alert, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import swal from "sweetalert";

import "./Register.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  setErrorMessage,
  setGender,
  setIsLoading,
  setIsLogin,
  setToggle,
  setUser,
} from "../../../reducers/slices/firebaseSlice";
import useFirebase from "../../../Hooks/useFirebase";
import { Checkbox, FormGroup, TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import logo from "../../../assets/logo.png";
import { Box } from "@mui/system";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Register = ({ handleClose }) => {
  const dispatch = useDispatch();
  const [isSignup, setIsSignup] = useState(true);
  const [userList , setUserList] = useState([])
  // const [isLogin, setIsLogin] = useState(false)

  const userDetails = useSelector((state) => state.firebase.user);
  const gender = useSelector((state) => state.firebase.gender);
  const errorMessage = useSelector((state) => state.firebase.errorMessage);
  const toggle = useSelector((state) => state.firebase.toggle);
  const isLogin = useSelector((state) => state.firebase.isLogin);

  // console.log(gender);
  console.log(userDetails);

  const navigate = useNavigate();
  const location = useLocation();

  const {
    signInWithGoogle,
    logOut,
    signUpWithEmailAndPass,
    loginWithEmailAndPassword,
    saveUser,
  } = useFirebase();

  const url = location.state?.from || "/";
  //hook form
  const {
    register,
    handleSubmit,
    reset,
    // watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const userListUrl = 'http://localhost:5000/users'
    fetch(userListUrl)
    .then(res => res.json())
    .then(data => setUserList(data))
  },[])
  const loginWithGoogle = () => {
    signInWithGoogle()
      .then(async(result) => {
        const user = result.user;

        // if (url) {
        //     navigate(url)
        // }
        // else{
        //     navigate('/')
        // }

        
        console.log(user,userList);
        const matched = userList.find(u => u?.email === user?.email)
        console.log('mathced ', userList ,matched);
        if (matched) {
          const URL = 'http://localhost:5000/auth';
        // const URL = 'https://medical-pager.herokuapp.com/auth';
        const { data: { token, userId, hashedPassword, fullName } } = await axios.post(`${URL}/login`, {
            username : user.email, password : user.uid, 
        });

        cookies.set('token', token);
        cookies.set('username', user.email);
        cookies.set('fullName', fullName);
        cookies.set('userId', userId);
        }
        else{
          const URL = 'http://localhost:5000/auth';
        // const URL = 'https://medical-pager.herokuapp.com/auth';
        const { data: { token, userId, hashedPassword, fullName } } = await axios.post(`${URL}/${isSignup ? 'signup' : 'login'}`, {
            username : user.email, password : user.uid, fullName: user.displayName, phoneNumber : user.phoneNumber, avatarURL : user.photoURL,
        });

        cookies.set('token', token);
        cookies.set('username', user.email);
        cookies.set('fullName', fullName);
        cookies.set('userId', userId);

        if(isSignup) {
            cookies.set('phoneNumber', user.phoneNumber);
            cookies.set('avatarURL', user.photoURL);
            cookies.set('hashedPassword', hashedPassword);
        }
        }
        dispatch(setErrorMessage(""));
        saveUser(user.email, user.displayName, "PUT");
        handleClose();
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(setErrorMessage(errorMessage));
      })
      .finally(() => dispatch(setIsLoading(false)));
  };
  const onSubmitSignUp = (data) => {
    console.log(data);
    const name = data.displayName;
    const email = data.email;
    const password = data.password;
    const gender = data.gender;
    const image = data.image;
    const mobileNumber = data.mobileNumber
    if (data.password === data.confirmpassword) {
      signUpWithEmailAndPass(name, email, password, image, mobileNumber, gender, url,  handleClose);
    } else {
      dispatch(
        setErrorMessage("password and confirm password did not matched ")
      );
    }
    console.log(data.email);
  };

  const onSubmitSignIn = (data) => {
    dispatch(setIsLogin(true));
    loginWithEmailAndPassword(data.email, data.password, handleClose)
    // setUser(data);
  };

  // save user in the database
  // const saveUserInTheDb = (data) => {
  //   const user = { ...data };
  //   console.log(user, "from outside axios");
  //   const api = "https://vast-chamber-83281.herokuapp.com/users";
  //   // const api = "https://fathomless-coast-82114.herokuapp.com/clientregister";
  //   axios.post(api, user).then((res) => {
  //     console.log(res, "inside axios");
  //     if (res.data.insertedId) {
  //       swal("Success!", "Your registration has successfully registered!", "success");
  //       // notify();
  //       reset();
  //     }
  //   });
  // };

  return (
    <>
      {!toggle ? (
        <div style={{ width: "100%" , padding:'20px 0px'}}>
          <form onSubmit={handleSubmit(onSubmitSignUp)}>
            {/* <Form.Label>Name</Form.Label> */}
            <p style={{ color: "white", textAlign: "center", fontSize: '20px'}}>
              Please ! Provide your identity
            </p>
            <TextField
              sx={{ width: "100%", my: 1 }}
              hiddenLabel
              variant="filled"
              id="standard-basic"
              type="text"
              className="input"
              size="small"
              placeholder="Enter your name"
              {...register("displayName", {
                required: true,
                minLength: 4,
                maxLength: 40,
              })}
            />
            {errors.displayName && errors.displayName.type === "required" && (
              <>
                <span className="error ">Name is required</span>
                <br />
              </>
            )}
            {errors.displayName && errors.displayName.type === "maxLength" && (
              <>
                <span className="error ">Max length exceeded</span>
                <br />
              </>
            )}
            {errors.displayName && errors.displayName.type === "minLength" && (
              <>
                <span className="error ">
                  Name Should be more than 4 character
                </span>
                <br />
              </>
            )}

            {/* <Form.Label className="mt-3">Email Address</Form.Label> */}
            <TextField
              sx={{ width: "100%", my: 1 }}
              hiddenLabel
              variant="filled"
              id="standard-basic"
              type="email"
              className="input"
              size="small"
              placeholder="Enter your Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <>
                <span className="error">Email is required </span>
                <br />
              </>
            )}
            {/* Phone Number start  */}
      
        <TextField
          type="number"
          placeholder="Please Enter Mobile Number"
          sx={{ width: "100%", my: 1 }}
              hiddenLabel
              variant="filled"
              id="standard-basic"
              className="input"
              size="small"
          {...register("mobileNumber", {
            required: true,
            minLength: 11,
            maxLength: 14,
          })}
        />
        {errors.mobileNumber && errors.mobileNumber.type === "required" && (
          <>
            <span className="error">Mobile Number is required </span>
            <br />
          </>
        )}
        {errors.mobileNumber && errors.mobileNumber.type === "minLength" && (
          <>
            <span className="error">Mobile Number must be 11 digit</span>
            <br />
          </>
        )}
        {errors.mobileNumber && errors.mobileNumber.type === "maxLength" && (
          <>
            <span className="error">Mobile Number must be 11 digit</span>
            <br />
          </>
        )}

            {/* Phone Number end   */}
            {/* Image link   */}

            <TextField
              sx={{ width: "100%", my: 1 }}
              hiddenLabel
              variant="filled"
              id="standard-basic"
              type="text"
              className="input"
              size="small"
              placeholder="Your Image Link "
              {...register("image", { required: true })}
            />
            {errors.image && (
              <>
                <span className="error">Image is required </span>
                <br />
              </>
            )}
            <TextField
              className="input"
              size="small"
              sx={{ width: "100%", my: 1 }}
              {...register("password", { required: true, minLength: 6 })}
              id="standard-basic"
              placeholder="Please Enter Your Password"
              type="password"
              hiddenLabel
              variant="filled"
            />
            {errors.password && errors.password.type === "required" && (
              <>
                <span className="error">Password is required </span>
                <br />
              </>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <>
                <span className="error">
                  Password should be more than 6 charecters
                </span>
                <br />
              </>
            )}
            <TextField
              className="input"
              size="small"
              sx={{ width: "100%", my: 1 }}
              {...register("confirmpassword", { required: true })}
              id="standard-basic"
              placeholder="Confirm Your Password"
              type="password"
              hiddenLabel
              variant="filled"
            />
            {errors.confirmpassword && (
              <>
                <span className="error">Confirm Password is required </span>
                <br />
              </>
            )}

            {/* <FormControl sx={{width:'100%'}}>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={e => dispatch(setGender(e.target.value))}
        required
      >
        <FormControlLabel  value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl> */}
            {errorMessage && <p className="error">{errorMessage}</p>}
            <Button type="submit" style={{
            borderRadius: 25,
            backgroundColor: "#102841",
            border:'2px solid white',
            marginTop:'20px'
     
        }} variant="contained">
              Create Account
            </Button>
          </form>
    
          <Box style={{ color: "white" , marginTop:'10px'}}>
            <Checkbox style={{ color: "white" }}  onChange={(e) => dispatch(setToggle(e.target.checked))} />
            <span style={{fontSize:'16px'}}>Already Have An Account ?</span>
            </Box>

          <Box sx={{textAlign:'center'}}>
          {/* <i
            style={{ fontSize: "25px" }}
            onClick={loginWithGoogle}
            className="fab fa-google "
          ></i> */}
          <Button variant='contained' sx={{width:'100%'}} style={{
                borderRadius: 25,
                backgroundColor: "#102841",
                border:'2px solid white',
                marginTop:'10px'
         
            }} onClick={loginWithGoogle}>Google</Button>
          {userDetails?.email && (
            <i
              onClick={logOut}
              style={{ fontSize: "25px", color: "red", marginLeft: "10px" }}
              className="fas fa-power-off"
            ></i>
          )}
          </Box>
        </div>
      ) : (
        <div
          className="container fluid"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center", color: 'white', 
            padding:'10% 0%'
          }}
        >
          <form
            onSubmit={handleSubmit(onSubmitSignIn)}
            style={{ width: "100%" }}
          >
            <div className="login-header" style={{textAlign:'center', marginBottom:'30px'}} >
              <img src={logo} width={100} alt="proplayer" style={{marginBottom:'15px', margin : '10px auto'}} />
              <h6>Log into your proplayer account</h6>
            </div>

            <TextField
              className="email-class input"
              sx={{ width: "100%", my: 1 }}
              hiddenLabel
              variant="filled"
              type="email"
              placeholder="Enter your Email"
              size="small"
              {...register("email", { required: true })}
            />
            <br />
            {errors.exampleRequired && <span>This field is required</span>}
            {/* <Form.Label>Password</Form.Label> */}
            <TextField
              className="password-class input"
              {...register("password", { required: true })}
              placeholder="Enter Password"
              type="password"
              sx={{ width: "100%", my: 1 }}
              hiddenLabel
              variant="filled"
              size="small"
            />{" "}
            <br />
            <Button
              type="submit"
              variant="contained"
              disabled={isLogin}
              style={{
                borderRadius: 25,
                backgroundColor: "#102841",
                border:'2px solid white',
                marginTop:'10px'
         
            }}
            >
              {isLogin ? "Login...." : "Login"}
            </Button>
           
            <Box style={{ color: "white" , marginTop:'30px'}}>
            <Checkbox style={{ color: "white" }} onChange={(e) => dispatch(setToggle(false))} />
            <span style={{fontSize:'16px'}}>Need an account ?</span>
            </Box>
           
            <Button variant='contained' sx={{width:'100%'}} style={{
                borderRadius: 25,
                backgroundColor: "#102841",
                border:'2px solid white',
                marginTop:'10px'
         
            }} onClick={loginWithGoogle}>Google</Button>
          </form>
        </div>
      )}
    </>
  );
};

export default Register;
