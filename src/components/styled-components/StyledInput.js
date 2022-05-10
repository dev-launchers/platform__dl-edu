import { styled } from "@mui/material";

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

<TextField inputProps={{ style: { color: "#ffffff" } }}></TextField>