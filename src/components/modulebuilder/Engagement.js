import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as yup from "yup";
import { useFormik } from "formik";
import ScrollToTop from "../ScrollToTop";

const validationSchema = yup.object({
  myurl: yup
    .string("invalid format")
    .url("invalid url")
    .required("url is required!"),
});

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
        sx={{ width: "50%" }}
        component={"form"}
        onSubmit={formik.handleSubmit}
        spacing={3}
      >
        <Typography variant="h3">
          Paste your link to codesandbox here!
        </Typography>
        <TextField
          id="myurl"
          value={formik.values.myurl}
          onChange={formik.handleChange}
          placeholder="codesandbox please!"
          error={formik.touched.myurl && Boolean(formik.errors.myurl)}
          helperText={formik.touched.myurl && formik.errors.myurl}
        />
        <Button
          sx={{ width: "75%" }}
          variant="contained"
          color="brightBlue"
          type="submit"
        >
          Submit
        </Button>
      </Stack>
    </>
  );
}

export default Engagement;
