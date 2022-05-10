import React, { useState } from "react";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  userTag: yup
    .string("Error, invalid format")
    .max(10, "tag is too long")
    .min(2, "tag is too short!")
    .lowercase("foo"),
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

const TAGCOLORS = [
  "#C4F1C4",
  "#FDECC8",
  "#FFBBAF",
  "#D3E5EF",
  "#BCB6FF",
  "#F5E0E9",
  "#FFE09F",
];
const StyledChip = styled(Chip)({
  marginRight: "3px",
  borderRadius: "5%",
});

function ModuleTags(props) {
  const [dynamicTagHolder, setDynamicTagHolder] = useState([
    { deleteable: false, label: "beginner" },
    { deleteable: false, label: "intermediate" },
    { deleteable: false, label: "advanced" },
    { deleteable: false, label: "functions" },
    { deleteable: false, label: "loops" },
  ]);
  const [repeatTag, setRepeatTag] = useState(false);
  const formik = useFormik({
    initialValues: {
      userTag: "",
    },
    validationSchema: validationSchema,
    onSubmit: (value) => {
      //no repeat tags
      const found = dynamicTagHolder.find(
        (element) => element.label === value.userTag
      );
      if (found != null) {
        setRepeatTag(true);
        return;
      }
      //add to tagholder, pass user tag to parent
      setRepeatTag(false);
      const tempTag = { deleteable: true, label: value.userTag.toLowerCase() };
      const tagHolder = dynamicTagHolder.slice();
      tagHolder.push(tempTag);
      setDynamicTagHolder(tagHolder);
      formik.values.userTag = "";
      props.userSelectedTag(tempTag);
    },
  });

  const handleUserSelectedTag = (tag) => () => {
    const tempTagHolder = dynamicTagHolder.slice();
    const tagIndex = tempTagHolder.indexOf(tag);
    tempTagHolder[tagIndex].deleteable = true;
    //update the deleteable object in the array
    setDynamicTagHolder(tempTagHolder);
    props.userSelectedTag(tag.label);
  };

  const handleUserDeletedTag = (tagToDelete) => () => {
    setDynamicTagHolder((tags) =>
      tags.filter((tag) => {
        return tag.label !== tagToDelete.label;
      })
    );
    props.userDeletedTag(tagToDelete.label);
  };

  return (
    <Grid container rowSpacing={2}>
      <Grid item xs={12}>
        <label style={{ color: "#ffffff" }}>Module Tags</label>
      </Grid>
      <Grid item xs={12}>
        {dynamicTagHolder.length > 0 ? (
          <ButtonGroup>
            {dynamicTagHolder.map((tag, index) => {
              const selectedColor = TAGCOLORS[index % 7]
              return (
                <Box sx={{ marginRight: "10px" }} key={index}>
                  <StyledChip
                    label={tag.label}
                    onClick={handleUserSelectedTag(tag)}
                    onDelete={tag.deleteable ? handleUserDeletedTag(tag) : null}
                    sx={{
                      backgroundColor: selectedColor,
                      "&:hover": { backgroundColor: selectedColor },
                    }}
                  />
                </Box>
              );
            })}
          </ButtonGroup>
        ) : (
          <Typography paragraph>
            No tags yet! Click below to add your own!
          </Typography>
        )}
      </Grid>
      <Grid
        item
        xs={8}
        sx={{ display: "flex", alignItems: "center", position: "static" }}
      >
        <form style={{ width: "100%" }}>
          <StyledTextField
            id="userTag"
            placeholder="+ Add your own tag"
            onChange={formik.handleChange}
            value={formik.values.userTag}
            inputProps={{ style: { color: "#ffffff" } }}
          />
          {formik.values.userTag !== "" && (
            <>
              <Button
                variant="contained"
                color="brightBlue"
                onClick={formik.handleSubmit}
              >
                Add tag
              </Button>
              {repeatTag && (
                <Typography paragraph sx={{ color: "#d32f2f" }}>
                  Tag is already available!
                </Typography>
              )}
            </>
          )}
        </form>
      </Grid>
      {formik.touched.userTag && formik.errors.userTag && (
        <Grid item xs={12}>
          <Typography paragraph sx={{ color: "#d32f2f" }}>
            {formik.touched.userTag && formik.errors.userTag}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
}

export default ModuleTags;
