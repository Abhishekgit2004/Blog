
import { Box, Button, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomLoader from "../Component/CustomLoader";
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import CommentSection from "./CommentSection";

const BlogHome = () => {
  const [open, setopen] = useState(false);
  const [data, setData] = React.useState([]);
  const[comment,setComments]=useState([])
  const [openComment,setOpenComment]=useState(false)
  let Getdata = async () => {
    setopen(true);
    try {
      const response = await axios.get(
        "https://blogs-api-ncn3.onrender.com/api/posts"
      );
      setData(response.data);
      setComments(response?.data?.comments)
      setopen(false);
     
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Getdata();
  }, []);
  return (
    <>
      <CustomLoader open={open} />
      <Box
        sx={{
          width: { sm: "80%", xs: "100%" },
          height: "100%",
          bgcolor: "black",
          color: "white",
          marginLeft: { sx: "0px", sm: "20%" },
          marginTop: "80px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Grid
            spacing={2}
            container
            padding={1}
            sx={{
              width: "100%",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {data?.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                xl={6}
                key={index}
                sx={{
                  width: { sm: 300, xs: "90%" },
                
                  padding: 2,
                  gap: 2,
                  display: "flex",
                  flexDirection: "column",
                    backgroundColor: "rgba(30, 32, 30, 0.4)", // semi-transparent dark
              backdropFilter: "blur(12px)", // blur effect
              WebkitBackdropFilter: "blur(12px)", // Safari support
              boxShadow: "none", // remove default shadow
              borderRight: "1px solid rgba(255,255,255,0.2)",
              borderRadius:"5px"
                }}
              >
                <img
                  style={{ aspectRatio: "3/4" }}
                  src={item.thumbnail}
                  alt=""
                />
                <h4 style={{ color: "white" }}>{item.title}</h4>
                <p>{item.updatedAt}</p>
                
                <Box sx={{display:"flex",gap:"10px"}}>
               <Button onClick={()=>setOpenComment(!open)}> <MapsUgcRoundedIcon /></Button> <FavoriteBorderRoundedIcon sx={{color:"white"}}/>

<CommentSection openComment={openComment} comments={comment}/>
                
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default BlogHome;