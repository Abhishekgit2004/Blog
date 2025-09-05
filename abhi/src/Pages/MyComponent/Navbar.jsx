import React from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { Chip, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
const naviagtio=useNavigate()
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const Menuitems = [
    { text: "Home", path: "/", icon: <InboxIcon /> },
    { text: "Profile", path: "/profile", icon: <MailIcon /> },
    { text: "About", path: "/about", icon: <InboxIcon /> },
  ];

  const DrawerList = (
    <Box sx={{ width: 250,bgcolor: "transparent",height:"100%",color: "white", 
    textShadow: "0 0 10px #00e5ff, 0 0 20px #00e5ff, 0 0 30px #d6fbffff" ,fontWeight:"bold" }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}><CloseIcon/></ListItemButton>
        </ListItem>
      </List>
      <List>
        {Menuitems.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton component={Link} to={text.path}>
              <ListItemIcon sx={{color:"white"}}>{text.icon}</ListItemIcon>
              <ListItemText primary={text.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bgcolor: "#1E201E",
          display: "flex",
          height: "80px",
          alignItems: "center",
          justifyContent: "space-around",
          width: `100%`,
          zIndex: 100,
        marginTop:"0px"
       
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button onClick={toggleDrawer(true)}>
            {open ? (
              <CloseIcon sx={{ color: "white", fontSize: "40px" }} />
            ) : (
              <MenuIcon sx={{ color: "white", fontSize: "40px" }} />
            )}
          </Button>
          <Button onClick={()=>naviagtio("/sigup")}>
            <AccountCircleIcon sx={{ color: "blue", fontSize: "40px" }} />
          </Button>{" "}
        </Box>
        <Drawer open={open} onClose={toggleDrawer(false)}
        PaperProps={{
    sx: {
          backgroundColor: "rgba(30, 32, 30, 0.4)",  // semi-transparent dark
      backdropFilter: "blur(12px)",              // blur effect
      WebkitBackdropFilter: "blur(12px)",        // Safari support
      boxShadow: "none",                         // remove default shadow
      borderRight: "1px solid rgba(255,255,255,0.2)", // subtle border              // remove shadow if you want
    },
  }}>
          {DrawerList}
        </Drawer>
        <Typography variant="h4" sx={{ color: "white" }}>
          <Chip label="Abhishek" color="warning" />
        </Typography>
      </Box>
    </>
  );
};

export default Navbar;
