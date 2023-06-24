import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./components.scss";
import CircleBall from "../Components/circleBall";

const footer = () => {
  return (
    <Box className="footer-class">
      <Box className="contact-text" display="flex" justifyContent="center">
        <h1>Contact us</h1>
      </Box>
      <Box display="flex" justifyContent="center">
        <CircleBall />
      </Box>

      <Grid container spacing={2}>
        <Grid items xs="12" sm="12" md="4"></Grid>
        <Grid items xs="12" sm="12" md="4"></Grid>
        <Grid items xs="12" sm="12" md="4"></Grid>
      </Grid>
    </Box>
  );
};

export default footer;
