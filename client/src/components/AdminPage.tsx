import Button from '@mui/material/Button';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import { useState } from "react";


function Admin() {
    const [loggedIn, setLogin] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    return (
            <div className="body">
                <div style={{marginBottom : "50px"}}>
                    <Typography variant="h2">Admin Page</Typography>
                </div>

                
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
                <Button variant="contained" onClick={() => {
                    alert('clicked');
                }}>Contained</Button> 


                {loggedIn ? <p>Logged in</p> : <p></p>}


            </div>
    )
}

export default Admin;