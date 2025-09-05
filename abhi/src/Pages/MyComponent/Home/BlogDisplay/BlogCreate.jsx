import { Box } from '@mui/material'
import React from 'react'

const BlogCreate = () => {
  return (
       <Box
      sx={{
        width: { sm: `80%`, xs: `100%` },
        height: { xs: "1000vh", sm: "300vh" },
        bgcolor: "green",
        marginLeft: { sx: "0px", sm: "20%" },
        marginTop: "80px",
      }}
    >
      Create Blog
    </Box>
  )
}

export default BlogCreate