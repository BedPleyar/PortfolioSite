import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import "../App.css"
import { useQuery } from '@tanstack/react-query';
import { Typography, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

async function fetchProjects() {
    const res = await fetch("/project")
    return res.json()
}

function ProjectDisplay() {
    const {data : projects, isLoading} = useQuery({
        queryFn: () => fetchProjects(),
        queryKey: ["projects"]
    })

    if (isLoading) {
        return (
            <Typography variant='body1' align='center'>Loading projects...</Typography>
        )
    }

    const theme = createTheme();

    theme.typography.body2 = {
    fontSize: '1rem'
    };

    return (
        <div>
            <div>
 
                <Grid container spacing={2}>
                {projects?.map((project: any) => {
                    return (
                        <Grid xs={12} sm={6} md={6} lg={3}>
                            <Paper elevation={6}>
                                <Typography variant='h6' textAlign={"center"}>
                                    {project.title}
                                </Typography>
                                <br/>
                                <Typography marginLeft={"10px"} marginRight={"10px"} fontSize={"1rem"} variant='body2'>
                                    {project.description}
                                </Typography>
                                <br/>
                                <Typography marginLeft={"10px"} marginRight={"10px"} fontSize={"1rem"} variant='body2'>
                                    <Typography fontStyle={"italic"}>Keywords:</Typography>
                                    {project.keywords.join(" ")}
                                </Typography>
                                <br/>
                            </Paper>
                        </Grid>
                )})}
                </Grid>
            </div>
        </div>
    )
}

export default ProjectDisplay;