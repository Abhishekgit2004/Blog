import { Box, Button, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box
        sx={{
          height: "69.5px",
          bgcolor: "#0c344f",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Typography color="white">Blog App</Typography>
        <Box
          sx={{ display: { xs: "none", md: "flex" }, gap: 5, color: "white" }}
        >
          <Link to={"/home"}>
            {" "}
            <Button color="inherit" sx={{color:"white"}}>Home</Button>
          </Link>
          <Link to={"/profile"}>
            <Button color="inherit" sx={{color:"white"}}>Profile</Button>
          </Link>
          <Link to={"/contact"}>
            {" "}
            <Button  color="inherit" sx={{color:"white"}}>Contact</Button>
          </Link>

            <Link to={"/sigup"}>
            <Button
              color="inherit"
              sx={{ bgcolor: "white", color: "black", fontWeight: "700" }}
            >
              sigup
            </Button>
          </Link>

          <Link to={"/login"}>
            <Button
              color="inherit"
              sx={{ bgcolor: "white", color: "black", fontWeight: "700" }}
            >
              Login
            </Button>
          </Link>
        </Box>

        <Box
          sx={{
            display: { md: "none", xs: "flex" },
            bgcolor: "#0c344f",
            gap: 5,
            color: "white",
            width: "100%",
            position: "fixed",
            top: "69.5px",
            flexDirection: "column",
            transition: "transform 0.3s ease-in-out",
            transform: open ? "translateX(0)" : "translateX(100%)",
            zIndex: "999",
          }}
        >
          <Button color="inherit">Home</Button>
          <Button color="inherit">Profile</Button>
          <Button color="inherit">Contact</Button>
          <Button color="contained">Login</Button>
        </Box>
        <Box
          sx={{
            display: { md: "none", xs: "flex" },
            flexDirection: "column",
            gap: "9px",
          }}
          onClick={() => setOpen(!open)}
        >
          <Typography
            variant="span"
            sx={{
              bgcolor: "white",
              width: "40px",
              transition: "0.3s",

              position: open ? "absolute" : "",
              height: "2px",
              transform: open ? "rotate(45deg)" : "rotate(0)",
              //   top: open ? "12px" : "19px",
            }}
          ></Typography>
          <Typography
            variant="span"
            sx={{
              bgcolor: "white",
              width: "40px",
              height: "2px",
              opacity: open ? 0 : 1,
            }}
          ></Typography>
          <Typography
            variant="span"
            sx={{
              bgcolor: "white",
              width: "40px",
              height: "2px",
              transition: "0.3s",

              //   top: open ? "12px" : "19px",
              position: open ? "absolute" : "",
              transform: open ? "rotate(-45deg)" : "rotate(0)",
            }}
          ></Typography>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
