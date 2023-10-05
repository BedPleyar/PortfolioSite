import { Button, TextField, Typography } from "@mui/material"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"

async function editProjectByID(data : string[]) {
    const res = await fetch(`/project/${data[0]}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({[data[1]] : data[2]})
    })
    if (!res.ok) {
        alert(`Error when editing object with ID ${data[0]}`)
        if (res.status === 404) {
            throw new Error("Item not found")
        }
        else {
            res.text().then(text => {throw new Error(text)})
        }
        
    }
    return res.json()
}


function EditByID () {

    
    const [editID, setEditID] = useState("")
    const [editField, setEditField] = useState("")
    const [editData, setEditData] = useState("")

    const [doEdit, setDoEdit] = useState(false)


    const {mutateAsync : editProject  } = useMutation({
        mutationFn : editProjectByID   
     });

    return (
        <div>
        <Typography variant="h6">Edit project by field</Typography>
            
            <TextField
            required
            id="outlined-required"
            label="ID"
            defaultValue=""
            style={{marginRight: "15px"}}
            onChange={(e)=>setEditID(e.target.value)}
            />
            <TextField
            required
            id="outlined-required"
            label="Field"
            defaultValue=""
            style={{marginRight: "15px"}}
            onChange={(e)=>setEditField(e.target.value)}
            />
            <TextField
            required
            id="outlined-required"
            label="Data"
            defaultValue=""
            style={{marginRight: "15px"}}
            onChange={(e)=>setEditData(e.target.value)}
            />

            
            <Button variant="contained" onClick={async () => {
                setDoEdit(false)
                try {
                    let data = [editID, editField, editData]
                    await editProject(data)
                    setDoEdit(true)
                } catch (e) {
                    console.error(e)
            }}}>Edit</Button> 

            {doEdit ? <p>Successful edit</p> : <p></p>}
            </div>

    )
}

export default EditByID