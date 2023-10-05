import { Button, TextField, Typography } from "@mui/material"
import { useState } from "react"



function DeleteByID () {
    const [deleteID, setDeleteID] = useState("")


    const [doDelete, setDoDelete] = useState(false)

    return (
        <div>
        <Typography variant="h6">Delete project by ID</Typography>
        <TextField
        required
        id="outlined-required"
        label="ID"
        defaultValue=""
        style={{marginRight: "15px"}}
        onChange={(e)=>setDeleteID(e.target.value)}
        />

        
        <Button variant="contained" onClick={() => {
            setDoDelete(true)
        }}>Delete</Button> 

        {doDelete ? <p>delete</p> : <p></p>}
        </div>
    )
}

export default DeleteByID