import { Margin } from "@mui/icons-material"
import { Button, Grid, Paper, TextField, Typography } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

async function fetchProjectByID(id : any) {
    const res = await fetch(`/project/${id}`)
    return res.json()
}

function FetchByID () {
    const [fetchID, setFetchID] = useState("")
    const [doFetch, setDoFetch] = useState(false)


    const {data : project, isLoading, refetch} = useQuery({
        queryFn: () => fetchProjectByID(fetchID),
        queryKey: ["project"],
        enabled: false
    })

    const executeFetch = () => {
        refetch()
        setDoFetch(true)
    }

    return (
        <div>
        <Typography variant="h6">Fetch project by ID</Typography>
        <div>
            <TextField
            required
            id="outlined-required"
            label="ID"
            defaultValue=""
            style={{marginRight: "15px"}}
            onChange={(e)=>setFetchID(e.target.value)}
            />

            <Button variant="contained" onClick={(e) => {
                executeFetch()
            }}>Fetch</Button> 
        </div>
        {doFetch ?
        <div style={{marginTop: "25px", marginBottom: "25px"}}>
            <Grid container spacing={2}>
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
            </Grid>
        </div>
         : <p></p>}
    </div>
    
    )
}

export default FetchByID