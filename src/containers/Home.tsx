import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const Home = () => {
  return (
    <Box textAlign="center">
      <Typography
        variant="h4"
        component="div"
        sx={{ paddingX: 20, paddingTop: 15 }}
      >
        The Healthcare Platform you and your clients will love
      </Typography>
      <Link to="/clients">
        <Button variant="contained" sx={{ marginTop: 3 }}>
          View Client List
        </Button>
      </Link>
    </Box>
  );
};
