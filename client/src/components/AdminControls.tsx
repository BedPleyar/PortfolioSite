import {Typography } from '@mui/material';
import '../App.css';
import FetchByID from './AdminControls/FetchByID';
import EditByID from './AdminControls/EditByID';
import DeleteByID from './AdminControls/DeleteByID';


function AdminControls() {

    return (
        <div className='body'>
            <Typography variant="h4">Admin Controls</Typography>

            <FetchByID />   
            <EditByID />
            <DeleteByID />

        </div>
    )
}


export default AdminControls