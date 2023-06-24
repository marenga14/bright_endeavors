import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "../../Components/card";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card
            title="Regina Herbert, PhD"
            disc1=" ABOUT US Regina Herbert, PhD BEN co-founder Regina Herbert has
                  a PhD in Molecular Biology from Northwestern University and a
                  diverse research background in the biomedical sciences. She
                  has studied and researched in the areas of cancer biology,
                  virology, and bacteriology at a variety of institutions
                  including Northwestern University Feinberg School of Medicine,
                  Johns Hopkins University School of Medicine and Rutgers
                  University Medical School Center for Emerging Pathogens"
            disc2="  In addition to her research experience, Dr. Herbert has over
                  twenty years of teaching experience at the university level.
                  Due to having three young children under the age of 8, Dr.
                  Herbert saw the need for STEAM based programs for children
                  within Pre-K through 6th grade."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            title="Nicole L. Warren, MSW, MEd"
            disc1="After earning her M.Ed. in Elementary Education at Rutgers University, BEN co-founder Nicole Warren, spent the next seven years teaching Curriculum Development. 
            Intrigued by the impact disturbances in a child’s social and emotional development could have on their learning, she returned to school to earn a Master of Social Work (MSW) degree from Columbia University"
            disc2="She currently works for a youth development organization that focuses on empowering girls to be leaders in their communities."
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            title="Ricardo R. Herbert, MUP, MBA"
            disc1="Ricardo is an Electrical Engineer with almost twenty years’ 
            experience working for top ten engineering consulting firms on capital intensive projects. In addition to his Engineer experience, he worked briefly as a transportation planner for a state DOT (Department of Transportation) following the completion of his Master of Urban 
            Planning and Policy (MUPP) degree from the University of Illinois at Chicago"
            disc2="Seeing the need to diversify beyond his Engineering and Planning background, 
            Mr. Herbert returned to school in 2012 and earned his Master of Business Administration (MBA) degree two years later from Rutgers University. Like his wife Regina and her life-long friend and business partner Nicole, Ricardo shares a love for children and is passionate about their education and their future.

"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card />
        </Grid>
        {/* <Grid item xs={3}>
          <Card />
        </Grid>
        <Grid item xs={3}>
          <Card />
        </Grid> */}
      </Grid>
    </Box>
  );
}
