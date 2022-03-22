import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const cardStyles = {
  position: "absolute",
  zIndex: "4000",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  height: "400px",
  width: "600px",
  padding: "20px",
  mt: "50px",
};

function SuccessNotification(props) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/learning-modules/:${props.parameter}`);
    document.body.style.overflow = "visible";
  }
  return (
    <Card sx={cardStyles}>
      <Typography sx={{ mt: "100px" }} textAlign="center">
        Congratulations, you have finished your own module!
      </Typography>
      <Button
        onClick={handleClick}
        variant="contained"
        sx={{ margin: "auto", width: "300px" }}
      >
        Go back to modules
      </Button>
    </Card>
  );
}

export default SuccessNotification;
