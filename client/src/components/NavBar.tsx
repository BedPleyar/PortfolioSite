import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Container, Stack, Typography } from "@mui/material";

function NavBar() {
    return (
    <div>
        <Stack direction={"row"} spacing={2}>
            <Container>
                <Typography variant="h6" align="center">
                    <Link to="/">
                    Home
                    </Link>
                </Typography>
            </Container>
            <Container>
                <Typography variant="h6" align="center">
                    <Link to="/about">
                    About Me
                    </Link>
                </Typography>
            </Container>
            <Container>
                <Typography variant="h6" align="center">
                    <a href="https://github.com/BedPleyar">Github</a>
                </Typography>
            </Container>
        </Stack>
    </div>
    )
}

export default NavBar;