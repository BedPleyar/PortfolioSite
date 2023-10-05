import { Button, TextField, Typography } from "@mui/material"
import { useState } from "react"


function EditByID () {
    const [editID, setEditID] = useState("")
    const [editField, setEditField] = useState("")
    const [editData, setEditData] = useState({})

    const [doEdit, setDoEdit] = useState(false)
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

            
            <Button variant="contained" onClick={() => {
                setDoEdit(true)
            }}>Edit</Button> 

            {doEdit ? <p>edit</p> : <p></p>}
            </div>

    )
}

export default EditByID