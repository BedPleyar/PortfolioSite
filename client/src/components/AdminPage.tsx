import Button from '@mui/material/Button';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { red } from '@mui/material/colors';
import AdminControls from './AdminControls';


function Admin() {
    const [loggedIn, setLogin] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [incorrectLogin, setIncorrectlogin] = useState(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    function checkPassword(login : any, pass : any) {
        
        if (pass === "admin1234" && login === "admin") {
            setLogin(true)
            setIncorrectlogin(false)
        }

        else {
            setIncorrectlogin(true)
        }
    }

    return (
            <div>
                {loggedIn ? <AdminControls /> : 
                <div className="body">
                    <div style={{marginBottom : "50px"}}>
                        <Typography variant="h2">Admin Page</Typography>
                    </div>

                    <div style={{marginBottom : "15px"}}>
                        <TextField
                        required
                        id="outlined-required"
                        label="Login"
                        defaultValue=""
                        style={{marginRight: "15px"}}
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        />
                        <FormControl style={{marginLeft: "15px"}} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                />
                        </FormControl>
                    </div>

                    <Button variant="contained" onClick={() => {
                        checkPassword(username, password)
                    }}>Login</Button> 

                    {incorrectLogin ? 
                        <Typography color={red[400]} variant='body2'>
                            Incorrect username or password
                        </Typography> : <p></p>}
                    
                

                </div>
                }
            </div>
    )
}

export default Admin;