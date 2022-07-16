import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const Home = () => {
  return (
    <Box>
      <Typography
        variant="h3"
        component="div"
        sx={{ textAlign: "center", color: "#212121" }}
      >
        Welcome to CarePatron!
      </Typography>
      <Link to="/clients">
        <Button variant="contained" sx={{ mt: 2 }}>
          View Client List
        </Button>
      </Link>
    </Box>
  );
};
