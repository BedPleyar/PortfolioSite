import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import { Box, Container, Stack, Typography } from "@mui/material";

function NavBar() {
    return (
    <div>
        <Stack direction={"row"} spacing={2}>
            <Container>
                <Typography variant="h6" align="center">
                    First Container
                </Typography>
            </Container>
            <Container>
                <Typography variant="h6" align="center">
                    Second Container
                </Typography>
            </Container>
            <Container>
                <Typography variant="h6" align="center">
                    Third Container
                </Typography>
            </Container>
        </Stack>
    </div>
    )
}

export default NavBar;