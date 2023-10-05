import { Button, TextField, Typography } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

async function fetchProjectByID(id : any) {
    const res = await fetch(`/project/${id}`)
    return res.json()
}

function FetchByID () {
    const [fetchID, setFetchID] = useState("")
    const [doFetch, setDoFetch] = useState(false)


    const {data : projects, isLoading, refetch} = useQuery({
        queryFn: () => fetchProjectByID(fetchID),
        queryKey: ["project"],
        enabled: false
    })

    const executeFetch = () => {
        refetch()
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
                setDoFetch(true)
                fetchProjectByID(fetchID)
            }}>Fetch</Button> 
        </div>
        {doFetch ? <p>fetch</p> : <p></p>}
    </div>
    
    )
}

export default FetchByID