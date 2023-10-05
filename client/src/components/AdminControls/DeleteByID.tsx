import { Button, TextField, Typography } from "@mui/material"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"

async function deleteProjectByID(id : any) {
    const res = await fetch(`/project/${id}`, {method: 'DELETE'})
    return res.json()
}

function DeleteByID () {
    const [deleteID, setDeleteID] = useState("")


    const [doDelete, setDoDelete] = useState(false)

    const {mutateAsync : deleteProject  } = useMutation({
       mutationFn : deleteProjectByID
    });

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

        
        <Button variant="contained" onClick={async () => {
            try {
                await deleteProject(deleteID)
                setDoDelete(true)
                alert("reached")
            } catch (e) {
                console.error(e)
            }
        }}>Delete</Button> 

        {doDelete ? <p>Successful delete</p> : <p></p>}
        </div>
    )
}

export default DeleteByID