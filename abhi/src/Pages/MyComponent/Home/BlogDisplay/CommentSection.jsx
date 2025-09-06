import React, { useState } from "react";
import { Button, Collapse, Box } from "@mui/material";

const CommentSection = ({ comments,openComment,setOpenComments }) => {

  return (
    <Box sx={{ mt: 2 }}>
     

      <Collapse in={openComment}>
        <Box sx={{ mt: 2, p: 2, bgcolor: "#f5f5f5", borderRadius: 2 ,color:"black"}}>
          {comments?.length > 0 ? (
            comments.map((c, i) => (
              <Box key={i} sx={{ mb: 1, p: 1, bgcolor: "white", borderRadius: 1 }}>
                <strong>{c.user || "User"}:</strong> {c.text}
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
