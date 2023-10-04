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
                <Typography variant="body1">
                    This page is dedicated to my portfolio and a small "About Me" page.
                    <br/>
                    <br/> Below you may find out more information about the projects I've worked on and the tech they have involved.
                    <br/> For further information and ways to reach out to myself please consult the "About Me" page.
                </Typography>
                <div style={{marginTop: "50px", marginBottom: "25px"}}>
                <Typography variant="h4">
                    Projects
                </Typography>
                </div>     
                <div>
                    {/*TODO: Add grid of projects pulled from API*/}

                </div>
            </div>     

        </div>
        
        
    )
}

export default HomePage;