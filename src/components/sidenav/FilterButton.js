import React from 'react'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


function FilterButton() {
    return (
        <Container
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  height: "70px",
                }}
              >
                <Button
                  variant="contained"
                  color="lightGray"
                  size="large"
                  sx={{ width: "80%", mt: "10px" }}
                >
                  Filter
                </Button>
              </Container>
    )
}

export default FilterButton
