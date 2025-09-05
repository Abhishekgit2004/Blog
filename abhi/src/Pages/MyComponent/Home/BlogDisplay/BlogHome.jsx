import { Box, Card } from '@mui/material'
import React from 'react'

const BlogHome = () => {
  return (
     <Box
      sx={{
        width: { sm: `80%`, xs: `100%` },
        height: { xs: "1000vh", sm: "300vh" },
        bgcolor: "black",
        color:"white",
        marginLeft: { sx: "0px", sm: "20%" },
        marginTop: "80px",
      }}
    >
<Box sx={{display:"flex",justifyContent:"center"}}>

    <Card sx={{bgcolor:"gray",color:"white"}}>
    dnd
    </Card>
</Box>
    </Box>
  )
}

export default BlogHome