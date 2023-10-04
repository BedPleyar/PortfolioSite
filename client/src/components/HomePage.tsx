import React from "react";
import Typography from '@mui/material/Typography';

function HomePage() {   
    return (
        <div className="body">
            <div>
                <div style={{marginBottom : "50px"}}>
                <Typography variant="h2">
                    Hi, I'm Louis.
                </Typography>
                </div>
                <Typography variant="h6">
                    This page is dedicated to my portfolio and a small "About Me" page.
                    <br/> Below you may find out more information about the projects I've worked on and the tech they have involved.
                    <br/> For further information and ways to reach out to myself please consult the "About Me" page.
                </Typography>   
            </div>       
        </div>
        
        
    )
}

export default HomePage;