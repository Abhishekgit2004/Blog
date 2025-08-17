import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          height: "90vh",
          // marginTop: "69.5px",
          backgroundImage:
            "url('https://images.hdqwalls.com/download/house-in-woods-winter-cold-6d-1366x768.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          component={"form"}
          bgcolor={"transparent"}
          sx={{
            height: "90%",
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
          <Typography sx={{ color: "white", textAlign: "center",fontWeight:"600", textShadow: "0 0 2px #a3bfb8, 0 0 5px #d6d4d4, 0 0 10px #f3e4e4" }} variant="h4">
         SignUp 
          </Typography>

          <TextField
         
           sx={{
            width:"90%",
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "white", borderRadius:5, },          // default border
      "&:hover fieldset": { borderColor: "#00ffcc" },  // hover border
      "&.Mui-focused fieldset": { 
        borderColor: "#00ffcc",                        // focus border
        boxShadow: "0 0 8px #00ffcc"     ,
            borderRadius:5,
                      // glow effect
      },
    },
    input: { color: "white" }, // input text color
  }}
            
            id="outlined-basic"
            label="Enter your Username"
            variant="outlined"
            xs="small"
              InputLabelProps={{
    style: { color: "white" }, // 👈 label color white
  }}
          />

            <TextField
         
           sx={{
            width:"90%",
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "white", borderRadius:5, },          // default border
      "&:hover fieldset": { borderColor: "#00ffcc" },  // hover border
      "&.Mui-focused fieldset": { 
        borderColor: "#00ffcc",                        // focus border
        boxShadow: "0 0 8px #00ffcc"     ,
           
                      // glow effect
      },
    },
    input: { color: "white" }, // input text color
  }}
            
            id="outlined-basic"
            label="Enter your email"
            variant="outlined"
            xs="small"
              InputLabelProps={{
    style: { color: "white" }, // 👈 label color white
  }}
          />
            <TextField
         
           sx={{
            width:"90%",
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "white", borderRadius:5, },          // default border
      "&:hover fieldset": { borderColor: "#00ffcc" },  // hover border
      "&.Mui-focused fieldset": { 
        borderColor: "#00ffcc",                        // focus border
        boxShadow: "0 0 8px #00ffcc"     ,
           
                      // glow effect
      },
    },
    input: { color: "white" }, // input text color
  }}
            
            id="outlined-basic"
            label="Enter Your Password"
            variant="outlined"
            xs="small"
              InputLabelProps={{
    style: { color: "white" }, // 👈 label color white
  }}
          />




          <Button  variant="contained"  sx={{bgcolor:"white",color:"Black",fontWeight:"600",width:"80%",borderRadius:5}}> Sign Up</Button>

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
