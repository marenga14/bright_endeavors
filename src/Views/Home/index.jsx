import { ReactDOM } from "react";
import { Box, Button, Menu, Typography, useTheme } from "@mui/material";
import { useState, useRef, useContext, useEffect } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import sideBarComponent from "../../Components/sideBarComponent";
import BasicGrid from "./Grid_ly";
import MenuIcon from "@mui/icons-material/Menu";
import Card from "../../Components/card";
import { Grid } from "@mui/material";
import OurProgram from "../../Components/ourProgram";
import "./home.scss";
import { MenuItem } from "react-pro-sidebar";
import { tokens } from "../../theme";
import { fontFamily } from "@mui/system";
import CircleBall from "../../Components/circleBall";
import Footer from "../../Components/footer";
const Home = () => {
  const [image, setImages] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div>
      <section className="video-background">
        <div className="background-video-wrapper">
          <video className="vdeo-class" autoPlay loop muted>
            <source
              src="https://www.moorlands-school.co.uk/wp-content/themes/moorlands/video/ms-hero-video_2.mp4"
              type="video/mp4"
            ></source>
          </video>
          <Box
            display="flex"
            justifyContent="space-between"
            className="bar-box navbar fixed-top"
          >
            {/* <div
              style={{
                display: "flex",
              }}
            ></div> */}
            <div className="image-class ps-3">
              <img
                style={{
                  height: "5rem",
                  paddingLeft: "2px",
                  borderRadius: "16px",
                }}
                type="logo"
                src="/assets/BEN-logo-2.webp"
              ></img>
            </div>
            <div className="menu-item-position text-white">
              <Menu iconShape="square">
                {/* LOGO AND MENU ICON */}
                <MenuItem color="white" icon={<MenuIcon />}>
                  <h1>hooray</h1>
                  <MenuIcon />
                </MenuItem>
              </Menu>
            </div>
          </Box>
          <Box className="video-text">
            <div>
              <p className="text">Join us as we travel along the</p>
              <Box display="flex" justifyContent="center">
                <h1 className="text-schoolNmame"> BrightEnderevors Way </h1>
              </Box>
            </div>
          </Box>
        </div>
      </section>

      <section className="welcome-section shadow-lg">
        <Box className="inside-welcome-section shadow-xl">
          <Box
            display="flex"
            justifyContent="center"
            style={{
              color: "#ffc03a",
              padding: "1%",
              backgroundColor: "gray",
              boxShadow: "2px green",
              borderRadius: "16px",
            }}
          >
            <h1> Welcome</h1>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            className="margin-lr-auto"
            color={colors.primary[300]}
          >
            At BEN we create and celebrate moments of discovery, creativity,
            inspiration and learning, through interactive Science, Technology,
            Engineering, Art and Math (STEAM) explorations.
          </Box>
        </Box>
      </section>

      <section className="team-section">
        <div className="program-sec">
          <Box display="flex" justifyContent="center">
            <h1 className="p-5">
              OUR <span style={{ color: "red" }}>S</span>
              <span style={{ color: "blue" }}>T</span>
              <span style={{ color: "green" }}>E</span>
              <span style={{ color: "yellow" }}>A</span>
              <span style={{ color: "#cd9d00" }}>M</span> PROGRAMS
            </h1>
          </Box>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12}>
              <OurProgram
                img="/assets/Screen-Shot-2018-07-08-at-09_13_edited.webp"
                title="CODING   WORKSHOPS"
                discription1=" Students will sharpen their abilities to determine cause and effect relationships, construct explanations and design solutions.  The BEN Coding Workshop provides screen-free, foundational skills needed to make the best of our Robotics & Engineering classes, 
                where children will apply their learning and creativity to programming."

                // discription2="Experiences using the creative and design processes develops these skills. B.E.N Design Studio classes are created so children can work on projects that encourage them to investigate, make, learn, and share. Students will explore principles of art with aspects of engineering as they design, build, customize and test working models. B.E.N. Design Studio classes provide unique opportunities for integrated lessons that let children to express
                //  their creativity while exploring the laws of physics and relationships between energy and forces."
              />
            </Grid>

            <Grid item xs={12} md={12}>
              <OurProgram
                title="BEN STUDIO DESIGN"
                img="/assets/Art Fun.jpg"
                discription1="To be successful in the 21st century and beyond, 
                students need to develop skills that help them think critically to be innovative solution-finders.  
                "
                discription2="Experiences using the creative and design processes develops these skills. B.E.N Design Studio classes are created so children can work on projects that encourage them to investigate, make, learn, and share. Students will explore principles of art with aspects of engineering as they design, build, customize and test working models. B.E.N. Design Studio classes provide unique opportunities for integrated lessons that let children to express
                 their creativity while exploring the laws of physics and relationships between energy and forces."
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <OurProgram
                title="ROBOTICS AND ENGINEERING"
                img="/assets/A girl is holding a robot lego dog that .webp"
                discription1="Our Robotics & Engineering  classes introduce students to the  fundamentals of engineering and give them a deeper understanding of technology, programming, electronics and mechanical systems.   Skills in teamwork, computational thinking and problem solving are developed in a fun way as students work together to apply physics and engineering concepts to design 
                and build working models with LEGO® STEAM Park and SNAP Circuits Jr., and LEGO® Early Simple Machines  
                "
                discription2="They’ll bring objects to life using introductory robotics, coding and programming principles.  Children will imagine new robotic creations and make them a reality using LEGO® WeDO 2.0. Using basic programming skills, children “teach” a robot how to play games, build, tell stories and more.  Students develop independence as they analyze and interpret data to plan
                 and carryout out their own investigation. "
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <OurProgram
                title="LIFE AND PHYSICAL SCIENCES"
                img="/assets/labcoats 1 (1).webp"
                discription1="It’s never too early for children to be exposed to concepts related to health and medicine that could lead them on the path to becoming a healthcare professional.  Through experiments, hands-on activities and interactive demonstrations, children learn about  topics in Anatomy and Physiology, Cell Biology, Microbiology and Chemistry.
                "
              />
            </Grid>
          </Grid>
        </div>
      </section>

      <hr className="text-white" />
      <section className="team-section shadow-lg p-5">
        <Box display="flex" justifyContent="start" className="pt-5 ps-5">
          <Typography color="black" variant="h1">
            {/* Who Found BEN? */}
          </Typography>
        </Box>
        <div className="team-row">
          <BasicGrid />
        </div>
      </section>

      <Box className="patners-section shadow-lg ">
        <div>
          <Box
            display="flex"
            justifyContent="center"
            style={{
              fontWeight: "700",
              fontSize: "1000",
            }}
          >
            <h1 className="pb-5 h-text ">Want to Join Us in</h1>
          </Box>

          <Box display="flex" justifyContent="center" style={{}}>
            <h2 variant="h2" className="h-text">
              Bright Endeavors Now Network ?
            </h2>
          </Box>

          <Box display="flex" justifyContent="center" className="p-5">
            <button className="primary p-3 button-white "> Get Started </button>
          </Box>
        </div>
      </Box>

      {/* footer section  */}
      <Footer />
    </div>
  );
};

export default Home;
