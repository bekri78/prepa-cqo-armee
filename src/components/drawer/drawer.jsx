import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SchoolIcon from "@mui/icons-material/School";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PrivateStates from "../Private/PrivateStates/PrivateStates";
import LaptopIcon from "@mui/icons-material/Laptop";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { deepOrange, green } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import "./Drawer.css";

import AutoGraphIcon from "@mui/icons-material/AutoGraph";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const navigate = useNavigate();
  const icons = [
    <HomeIcon />,
    <WorkspacePremiumIcon />,
    <LaptopIcon />,
    <SchoolIcon />,
    <NewspaperIcon />,
    <MailIcon />,
  ];

  const handleIconClick = (index) => {
    switch (index) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/quizz");
        break;
      case 2:
        window.open("https://moodle22-23.ecole-air.fr/", "_blank");
        break;
      case 3:
        window.open("https://www.ecole-air-espace.fr/", "_blank");
        break;
      case 4:
        window.open(
          "https://air.defense.gouv.fr/armee-de-lair-et-de-lespace/actualites",
          "_blank"
        );
        break;
      case 5:
        navigate("/email");
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", width:"100%" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          bgcolor: "#19222c",
          '@media (max-width: 500px)': {
            width: '75%',
            alignItems:'center'
          
          },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h6" noWrap component="div">
            Votre espace statistique
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          height:'auto',
          width: drawerWidth,
          flexShrink: 0,
          '@media (max-width: 500px)': {
            width: '90px',
          
          },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#222e3c",
            '@media (max-width: 500px)': {
              width: '100px',
            
            },
          },
        }}
        variant="permanent"
        anchor="left"
        containerStyle={{ backgroundColor: "black" }}
      >
        <div
          className="container-img-name"
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
        >
          <Avatar
            alt="Remy Sharp"
            sx={{ width: 50, height: 50, bgcolor: green[500] }}
          >
            <AutoGraphIcon />
          </Avatar>
        </div>

        <List>
          {["Accueil", "Quizz", "Moodle", "ECA", "Actu Air", "Contact"].map(
            (text, index) => (
              <>
                <ListItem key={text} disablePadding>
                  <ListItemButton className="listItemBtn" onClick={() => handleIconClick(index)}>
                    <ListItemIcon>{icons[index]}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
                <Divider
                  variant="middle"
                  sx={{ borderBottomWidth: 1, bgcolor: "white" }}
                />
              </>
            )
          )}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "#19222c", p: 3 }}>
        <Toolbar />
        <PrivateStates />
      </Box>
    </Box>
  );
}
