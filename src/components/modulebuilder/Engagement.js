import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {styled} from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import ScrollToTop from "../ScrollToTop";

const validationSchema = yup.object({
  myurl: yup
    .string("invalid format")
    .url("invalid url")
    .required("url is required!"),
});

const StyledTextField = styled(TextField)`
  background: #4e4e4e;

  & .MuiInput-underline:after {
    border-bottom-color: white;
  }
  & .MuiOutlinedInput-root {
    /* & fieldset {
        border-color: white;
      } */
    &:hover fieldset {
      border-color: white;
    }
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`;

function Engagement(props) {
  const formik = useFormik({
    initialValues: {
      myurl: "",
    },
    validationSchema: validationSchema,
    onSubmit: (url) => {
      props.userSumbittedUrl(url);
      ScrollToTop();
    },
  });
  return (
    <>
      <Stack
        sx={{ width: "100%", backgroundColor:"#262626", padding:"20px" }}
        component={"form"}
        onSubmit={formik.handleSubmit}
        spacing={3}
      >
        <Typography variant="h3" sx={{ color: "neutral.main" }}>
          Paste your link to codesandbox here!
        </Typography>
        <StyledTextField
          id="myurl"
          value={formik.values.myurl}
          onChange={formik.handleChange}
          placeholder="codesandbox please!"
          error={formik.touched.myurl && Boolean(formik.errors.myurl)}
          helperText={formik.touched.myurl && formik.errors.myurl}
          inputProps={{ style: { color: "#ffffff" } }}
        />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button variant="contained" type="submit">
            Go back
          </Button>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
          >
            Go to exercises section
          </Button>
        </Box>
      </Stack>
    </>
  );
}

export default Engagement;
