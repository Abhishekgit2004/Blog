import React, { useState } from "react";
import { Button, Collapse, Box } from "@mui/material";

const CommentSection = ({ comments,openComment,setOpenComments }) => {
console.log(comments)
  return (
    <Box sx={{ width:"100%"}}>
     

      <Collapse in={openComment}>
        <Box sx={{ p: 2, bgcolor: "#000000", borderRadius: 2 ,color:"black"}}>
          {comments?.length > 0 ? (
            comments.map((c, i) => (
              <Box key={i} sx={{ mb: 1, p: 1, bgcolor: "black",color:"white", borderRadius: 1 }}>
                <strong>{c.content || "User"}:</strong> {c.text}
              </Box>
            ))
          ) : (
            <p>No comments yet</p>
          )}
        </Box>
      </Collapse>
    </Box>
  );
};

export default CommentSection;
