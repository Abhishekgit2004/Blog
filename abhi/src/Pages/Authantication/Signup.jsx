import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authantiction } from "../../Services/Authantiction";

const Signup = () => {
 const [name,setname]=useState('')
 const [email,setEmail]=useState('')
 const [password,setpassword]=useState('')
  const navigate=useNavigate()

  const getRegister=async(e)=>{
      e.preventDefault()
      try {
        const response= await Authantiction.CreatetRegisterUser(name,email,password)
        console.log(response)
         if (response?.status === 200 ) {
        navigate("/");
      }

      } catch (error) {
        console.log(error)
      }
  }
  return (
    <>
      <Box
        sx={{
         
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          height: "100vh",
          // marginTop: "69.5px",
          backgroundImage:
            "url('https://images.hdqwalls.com/download/house-in-woods-winter-cold-6d-1366x768.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
        onSubmit={getRegister}
          component={"form"}
          bgcolor={"rgba(0,0,0,0.6)"}
          sx={{
            marginTop:"80px",
            height: "80%",
            width: { xs: "90%", md: "30%",sm:"70%" },
          border: "2px solid #f9f9f9",
    borderRadius: 10,
    boxShadow: "0 0 15px #e3f7f3", 
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"space-evenly"
          }}
        >
          <Typography sx={{ color: "white", textAlign: "center",fontWeight:"600", textShadow: "0 0 2px #a3bfb8, 0 0 5px #d6d4d4, 0 0 10px #f3e4e4" }} variant="h4" >
         SignUp 
          </Typography>

          <TextField
          value={name}
         onChange={(e)=>setname(e.target.value)}
             sx={{
            
            width:"90%",
    "& .MuiOutlinedInput-root": {
        backgroundColor: "transparent",
      "& fieldset": { borderColor: "white", borderRadius:5, },          // default border
      "&:hover fieldset": { borderColor: "#00ffcc" },  // hover border
      "&.Mui-focused fieldset": { 
        borderColor: "#00ffcc",                        // focus border
        boxShadow: "0 0 8px #00ffcc"     ,
           
                      // glow effect
      },
       "& input:-webkit-autofill": {
       WebkitBoxShadow: "0 0 0 1000px transparent inset !important", // clear bg
        WebkitTextFillColor: "white !important", // text white
        backgroundColor: "transparent !important", // enforce transparent
        transition: "background-color 9999s ease-in-out 0s", // trick Chrome
        caretColor: "white",
      },
    },
    input: { color: "white" }, // input text color
  }}
            
            id="outlined-basic"
            label="Enter Your Name"
            variant="outlined"
            xs="small"
              InputLabelProps={{
    style: { color: "white" }, // 👈 label color white
  }}
          />

            <TextField
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
         sx={{
            
            width:"90%",
    "& .MuiOutlinedInput-root": {
        backgroundColor: "transparent",
      "& fieldset": { borderColor: "white", borderRadius:5, },          // default border
      "&:hover fieldset": { borderColor: "#00ffcc" },  // hover border
      "&.Mui-focused fieldset": { 
        borderColor: "#00ffcc",                        // focus border
        boxShadow: "0 0 8px #00ffcc"     ,
           
                      // glow effect
      },
       "& input:-webkit-autofill": {
       WebkitBoxShadow: "0 0 0 1000px transparent inset !important", // clear bg
        WebkitTextFillColor: "white !important", // text white
        backgroundColor: "transparent !important", // enforce transparent
        transition: "background-color 9999s ease-in-out 0s", // trick Chrome
        caretColor: "white",
      },
    },
    input: { color: "white" }, // input text color
  }}
            
            id="outlined-basic"
            label="Enter Your Email"
            variant="outlined"
            xs="small"
              InputLabelProps={{
    style: { color: "white" }, // 👈 label color white
  }}
          />
            <TextField
         value={password}
         onChange={(e)=>setpassword(e.target.value)}
           sx={{
            
            width:"90%",
    "& .MuiOutlinedInput-root": {
        backgroundColor: "transparent",
      "& fieldset": { borderColor: "white", borderRadius:5, },          // default border
      "&:hover fieldset": { borderColor: "#00ffcc" },  // hover border
      "&.Mui-focused fieldset": { 
        borderColor: "#00ffcc",                        // focus border
        boxShadow: "0 0 8px #00ffcc"     ,
           
                      // glow effect
      },
       "& input:-webkit-autofill": {
       WebkitBoxShadow: "0 0 0 1000px transparent inset !important", // clear bg
        WebkitTextFillColor: "white !important", // text white
        backgroundColor: "transparent !important", // enforce transparent
        transition: "background-color 9999s ease-in-out 0s", // trick Chrome
        caretColor: "white",
      },
    },
    input: { color: "white" }, // input text color
  }}
            
            id="outlined-basic"
            label="Enter Your password"
            variant="outlined"
            xs="small"
              InputLabelProps={{
    style: { color: "white" }, // 👈 label color white
  }}
          />




          <Button type="submit" variant="contained"  sx={{bgcolor:"white",color:"Black",fontWeight:"600",width:"80%",borderRadius:5}}> Sign Up</Button>

          <Box sx={{display:"flex",gap:"10px",justifyContent:"center",alignItems:'center'}}>
            <Typography variant="span" color="red" sx={{fontWeight:"700",  textShadow: "0 0 5px #fbfffe, 0 0 10px #00ffcc, 0 0 20px #00ffcc",}}>Already have an account?</Typography>
            <Link to={"/login"}>
             <Button  variant="contained"  sx={{bgcolor:"white",color:"Black",fontWeight:"600",borderRadius:5}}>Login</Button>
            
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Signup;
