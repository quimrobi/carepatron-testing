import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const Home = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        component="div"
        sx={{ textAlign: "center", paddingX: 20 }}
      >
        The Healthcare Platform you and your clients will love
      </Typography>
      <Link to="/clients">
        <Button variant="contained" sx={{ mt: 3 }}>
          View Client List
        </Button>
      </Link>
    </Box>
  );
};
