import React from "react";
import '../App.css';
import { Container, Stack, Typography } from "@mui/material";

function AboutMe() {
    return (
        <div className="body">
            <div style={{marginBottom : "50px"}}>
            <Typography variant="h2">Louis Tsang</Typography>
            </div>
            <Typography variant="h6">I am a </Typography>
        </div>
    )
}

export default AboutMe;