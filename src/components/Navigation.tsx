import React from "react";
import { Outlet, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export const Navigation = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: "flex" }}
          >
            CarePatron
          </Typography>
          <Box>
            <Link to="/">
              <Button sx={{ color: "#fff" }}>Home</Button>
            </Link>
            <Link to="/clients">
              <Button sx={{ color: "#fff" }}>Clients</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 5, width: "100%" }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};
