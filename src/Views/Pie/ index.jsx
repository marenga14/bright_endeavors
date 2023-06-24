import { Box, useTheme } from "@mui/material";
import PieCharts from "../../Components/pieCharts";
import Header from "../../Components/head";
import { tokens } from "../../theme";
const ChartsPie = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box margin="20px">
      <Header title="Pie charts" subtittle="Damn it" />
      <Box display="flex" justifyContent="center">
        <PieCharts />
      </Box>
    </Box>
  );
};
export default ChartsPie;
