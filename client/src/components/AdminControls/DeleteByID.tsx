import { Button, TextField, Typography } from "@mui/material"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"

async function deleteProjectByID(id : any) {
    return await fetch(`/project/${id}`, {method: 'DELETE'})
}

function DeleteByID () {
    const [deleteID, setDeleteID] = useState("")


    const [doDelete, setDoDelete] = useState(false)

    const {mutateAsync : deleteProject  } = useMutation({
       mutationFn : async (deleteProj) => {
        return await fetch(`/project/${deleteID}`, {method: 'DELETE'})
       }
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
                    await deleteProject()
                } catch (e) {
                    console.error(e)
                }
                console.log("Success")
        }}>Delete</Button> 

        {doDelete ? <p>Successfully deleted</p> : <p></p>}
        </div>
    )
}

export default DeleteByID