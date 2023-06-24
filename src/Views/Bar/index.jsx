import { Box } from "@mui/material";
import BarChart from "../../Components/BarChart";
import Header from "../../Components/head";
import Chart from "../../Components/hoola";

const Bar = () => {
  return (
    <Box>
      <Header title="Bar charts" subtittle="Datas in bar" />
      <Box>
        <Chart />
      </Box>
    </Box>
  );
};

export default Bar;
