import { Box, Button } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import PagesIcon from "@mui/icons-material/Pages";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

const BlogOption = ({homeBlog,sethomeBlog,myblog,setMyblog,createBlog,setCreateBlog,blogProfile,setBlogProfile,blogSetting,setBlogSetting}) => {


  const handleHome=()=>{
    sethomeBlog(true)
    setMyblog(false)
    setCreateBlog(false)
     setBlogProfile(false)
    setBlogSetting(false)
  }
  const handleMy=()=>{
    sethomeBlog(false)
    setMyblog(true)
    setCreateBlog(false)
     setBlogProfile(false)
    setBlogSetting(false)
  }
  const handleCreate=()=>{
    sethomeBlog(false)
    setMyblog(false)
    setCreateBlog(true)
    setBlogProfile(false)
    setBlogSetting(false)
  }
  const handleProfile=()=>{
    sethomeBlog(false)
    setMyblog(false)
    setCreateBlog(false)
    setBlogProfile(true)
    setBlogSetting(false)
  }
  const handleSetting=()=>{
    sethomeBlog(false)
    setMyblog(false)
    setCreateBlog(false)
    setBlogProfile(false)
    setBlogSetting(true)
  }
  return (
    <Box
      sx={{
        width: { sm: `20%`, xs: `100%` },
        position: { xs: "fixed", sm: "fixed" },
        bottom: { xs: 0, sm: "auto" }, // stick to bottom in mobile
     
        height: { xs: "60px", sm: "100vh" },
        bgcolor: "#37353E",
        zIndex: {xs:1000,sm:0}, // keep it above content
        display: "flex",
        alignItems:{  sx:"center",sm:"flex-start"},
        marginTop: { xs: "0", sm: "80px" },
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: { xs: "flex", sm: "flex" },
          flexDirection: { xs: "row", sm: "column" },
          gap:{sm:"14px"},
          // padding: "10px",
          alignItems:{xs: "center",sm:"start"},
          width: "100%",
          justifyContent:'space-between'
          
        }}
      >
        <Button sx={{ color: "white", display: "flex", gap: "20px" }} onClick={handleHome}>
          <HomeIcon />
          <Box sx={{ display: { sm: "inline", xs: "none" } }}>Home</Box>
        </Button>
        <Button sx={{ color: "white", display: "flex", gap: "20px" }} onClick={handleMy}>
          <PagesIcon />
          <Box sx={{ display: { sm: "inline", xs: "none" } }}>My Blog</Box>
        </Button>
        <Button sx={{ color: "white", display: "flex", gap: "20px" }} onClick={handleCreate}>
          <AddIcon />
          <Box sx={{ display: { sm: "inline", xs: "none" } }}>Create</Box>
        </Button>
        <Button sx={{ color: "white", display: "flex", gap: "20px" }} onClick={handleProfile}>
          <AccountCircleRoundedIcon />
          <Box sx={{ display: { sm: "inline", xs: "none" } }}>Profile</Box>
        </Button>
        <Button sx={{ color: "white", display: "flex", gap: "20px" }} onClick={handleSetting}>
          <SettingsSuggestIcon />
          <Box sx={{ display: { sm: "inline", xs: "none" } }}>Settings</Box>
        </Button>
      </Box>
    </Box>
  );
};

export default BlogOption;
