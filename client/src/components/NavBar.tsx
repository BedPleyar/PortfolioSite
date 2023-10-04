import React from "react";
import { Link } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import GitHubIcon from '@mui/icons-material/GitHub';

function NavBar() {

    const [value, setValue] = React.useState('home');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };

    return (
    <div>
        <BottomNavigation showLabels sx={{ width: "100%" }} value={value} onChange={handleChange}>
        <BottomNavigationAction component={Link} to={"/"} style={{maxWidth: "100%"}}
            label="Home"
            value="home"
            icon={<HomeIcon />}
        />
        <BottomNavigationAction component={Link} to={"/about"} style={{maxWidth: "100%"}}
            label="About Me"
            value="about"
            icon={<PersonIcon />}
        />
        <BottomNavigationAction href="https://github.com/BedPleyar" style={{maxWidth: "100%"}}
            label="GitHub"
            value="github"
            icon={<GitHubIcon />}
        />
        </BottomNavigation>

    </div>
    )
}

export default NavBar;