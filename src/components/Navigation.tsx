import React from "react";
import { Outlet, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import CarePatronLogo from "../logo.svg";

export const Navigation = () => {
  return (
    <>
      <AppBar component="nav" position="relative">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <img src={CarePatronLogo} />
          </Box>
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

      <Container maxWidth="md" sx={{ padding: 4 }}>
        <Outlet />
      </Container>
    </>
  );
};
