import React from 'react'
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const cardStyles = { position:"absolute", zIndex:"4000", display:"flex", justifyContent:"center", flexDirection:"column", height:"400px", width:"600px", padding:"20px", mt:"50px" };

function SuccessNotification(props) {
    return (
        <Card sx={cardStyles}>
            <Typography sx={{mt:"100px"}} textAlign="center">Congratulations, you have finished your own module!</Typography>
            <Button onClick={props.closeModal} variant="contained" sx={{ margin:"auto", width:"300px"}}>Go back to modules</Button>
        </Card>
    )
}

export default SuccessNotification;
