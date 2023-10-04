import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import "../App.css"
import { useQuery } from '@tanstack/react-query';
import { Typography } from '@mui/material';

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

    return (
        <Grid container spacing={2}>
            <Grid xs={12} sm={6} md={6} lg={3}>
            <Paper elevation={6} >xs=6 md=8</Paper>
            </Grid>
            <Grid xs={12} sm={6} md={6} lg={3}>
            <Paper elevation={6} >xs=6 md=4</Paper>
            </Grid>
            <Grid xs={12} sm={6} md={6} lg={3}>
            <Paper elevation={6} >xs=6 md=4</Paper>
            </Grid>
            <Grid xs={12} sm={6} md={6} lg={3}>
            <Paper elevation={6} >xs=6 md=8</Paper>
            </Grid>
        </Grid>
    )
}

export default ProjectDisplay;