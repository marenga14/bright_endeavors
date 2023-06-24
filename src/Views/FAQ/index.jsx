import { Box, useTheme, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { tokens } from "../../theme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../Components/head";

const faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Header title="FQs" subtittle="Daman it faqs" />
      <Box margin="20px">
        <Accordion
          sx={{
            margin: "4px 4px",
            padding: "4px 4px",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h4" color={colors.primary[400]}>
              The very import question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h6" color={colors.greenAccent[500]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              culpa quae est fugiat quas sunt laudantium vitae. Iste cumque,
              placeat ab fugiat repudiandae reiciendis laborum totam ex sequi
              quasi molestiae?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            margin: "4px 4px",
            padding: "4px 4px",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h4" color={colors.primary[400]}>
              The very import question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h6" color={colors.greenAccent[500]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              culpa quae est fugiat quas sunt laudantium vitae. Iste cumque,
              placeat ab fugiat repudiandae reiciendis laborum totam ex sequi
              quasi molestiae?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h4" color={colors.primary[400]}>
              The very import question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h6" color={colors.greenAccent[500]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              culpa quae est fugiat quas sunt laudantium vitae. Iste cumque,
              placeat ab fugiat repudiandae reiciendis laborum totam ex sequi
              quasi molestiae?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            margin: "4px 4px",
            padding: "4px 4px",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h4" color={colors.primary[400]}>
              The very import question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h6" color={colors.greenAccent[500]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              culpa quae est fugiat quas sunt laudantium vitae. Iste cumque,
              placeat ab fugiat repudiandae reiciendis laborum totam ex sequi
              quasi molestiae?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            margin: "4px 4px",
            padding: "4px 4px",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h4" color={colors.primary[400]}>
              The very import question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h6" color={colors.greenAccent[500]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              culpa quae est fugiat quas sunt laudantium vitae. Iste cumque,
              placeat ab fugiat repudiandae reiciendis laborum totam ex sequi
              quasi molestiae? lpa quae est fugiat quas sunt laudantium vitae.
              Iste cumque, placeat ab fugiat repudiandae reiciendis laborum
              totam ex sequi quasi molestiae?
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};
export default faq;
