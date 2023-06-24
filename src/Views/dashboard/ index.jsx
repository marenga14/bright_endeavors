import react from "react";
import reactdom from "react-dom";
import navbar from "./navbar";
import { Box, useTheme } from "@mui/system";

import Header from "../../Components/head";

const Dashboard = () => {
  return (
    <Box>
      <Box display="flex">
        <Header title="DASHBOARD" subtittle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
};

export default Dashboard;
