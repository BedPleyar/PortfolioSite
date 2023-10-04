import React from "react";
import Typography from '@mui/material/Typography';
import { Container, Stack } from "@mui/material";
import NavBar from "./NavBar";

function HomePage() {   
    return (
        <div>
            <div>
                <Typography variant="h2">
                    Hi, I'm Louis.
                </Typography>
                <Typography variant="h6">
                    This page is dedicated to my portfolio and a small "About Me" page.
                    <br/> Below you may find out more information about the projects I've worked on and the tech they have involved.
                    <br/> For further information and ways to reach out to myself please consult the "About Me" page.
                </Typography>   
            </div>       
            <div style={{position: "fixed", bottom: "0", width: "100%"}}>
                <NavBar />
            </div>
        </div>
        
        
    )
}

export default HomePage;