import React from "react";
import '../App.css';
import { Container, Stack, Typography } from "@mui/material";

function AboutMe() {
    return (
        <div className="body">
            <div style={{marginBottom : "50px"}}>
            <Typography variant="h2">Louis Tsang</Typography>
            </div>
            <Typography variant="body1">
                I am a recent graduate with experience in a variety of languages/technologies such as Python, 
                JavaScript, C++, C, MATLAB, Scala, React, NodeJS, pandas, numPy and more.
            </Typography>
            <p></p>
            <Typography variant="body1">
                I graduated in 2022 with a Master of Science from the University of Edinburgh and in 
                2021 I received my Bachelor of Science from the University of Nottingham. 
                <br/>Both degrees were in Computer Science,
                for which I received the degree classifications of Merit and First-Class respectively.
            </Typography>
            <p></p>
            <Typography variant="body1">
                In my spare time I endeavour to keep up with the latest technology trends and to 
                upskill myself in order to remain competitive in the market. Whether that is reading the 
                latest newsletter from TL;DR, or undertaking extracurricular courses from sites such as Udemy 
                or PluralSight.
                <br/>
                <br/> I am currently taking the C# 10 PluralSight course, and the 100 Days of Python Bootcamp 
                on Udemy.
            </Typography>
            <p></p>
            <Typography variant="body1">
                If you would like to reach out about careers, or view some work from my portfolio, 
                you may <a color="#0072b1" href="https://www.linkedin.com/in/louis-tsang1/">find my LinkedIn here</a>,
                or open my GitHub link on the navigation bar.
            </Typography>
        </div>
    )
}

export default AboutMe;