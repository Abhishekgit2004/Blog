import { Box } from "@mui/material";
import React from "react";
import BlogOption from "./BlogOption";
import BlogMy from "./BlogDisplay/BlogMy";
import BlogCreate from "./BlogDisplay/BlogCreate";
import BlogHome from "./BlogDisplay/BlogHome";
import BlogProfile from "./BlogDisplay/BlogProfile";
import BlogSetting from "./BlogDisplay/BlogSetting";

const Home = () => {
  const [homeBlog, sethomeBlog] = React.useState(true);
  const [myblog, setMyblog] = React.useState(false);
  const [createBlog, setCreateBlog] = React.useState(false);
  const [blogProfile, setBlogProfile] = React.useState(false);
  const [blogSetting, setBlogSetting] = React.useState(false);
  return (
    
      <>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            bgcolor:"black",
            height: "100%",
            position: "relative",
            flexDirection: { xs: "column-reverse", sm: "row" },
          }}
        >
       
          {myblog && <BlogMy />}
          {createBlog && <BlogCreate />}
          {homeBlog && <BlogHome />}
          {blogProfile && <BlogProfile />}
          {blogSetting && <BlogSetting />}
       

            <BlogOption
              homeBlog={homeBlog}
              sethomeBlog={sethomeBlog}
              myblog={myblog}
              setMyblog={setMyblog}
              createBlog={createBlog}
              setCreateBlog={setCreateBlog}
              blogProfile={blogProfile}
              setBlogProfile={setBlogProfile}
              blogSetting={blogSetting}
              setBlogSetting={setBlogSetting}
            />
        </Box>
      </>
   
  );
};

export default Home;
