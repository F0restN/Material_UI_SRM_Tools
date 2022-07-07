import React, {useState} from 'react';
import {useHistory, withRouter} from 'react-router-dom';
import {CONFIG} from "../ENV";
import {Button, Container, Divider, Grid, Stack, TextField, Typography} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import Box from "@mui/material/Box";

function Loginpage({authenticationStatus, setAuthenticationStatus}) {
    const history = useHistory();
    const [logInfo, setLogInfo] = useState({
        identifier: "",
        password: ""
    });

    const authenticate = async () => {
        try {
            let res = await fetch(`${CONFIG.PORTAL}/auth/local`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(logInfo)
            })

            let result = await res.json();
            console.log(result)
            console.log(result.user.username)

            // Update the value of react context if valid
            if (result && result.user) {
                let authenticationStatusInfo = {
                    authenticationRole: result.user.role.name,
                    jwtToken: result.jwt
                }
                sessionStorage.setItem('authenticationStatus', JSON.stringify(authenticationStatusInfo))
                sessionStorage.setItem("currentUserName", (result.user.username))

                // store.dispatch(update(authenticationStatusInfo))
                if (authenticationStatusInfo.authenticationRole === "Faculty") {
                    history.push("/InputPlanner", authenticationStatusInfo)
                } else if (authenticationStatusInfo.authenticationRole === "Staff") {
                    history.push("/pos", authenticationStatusInfo)
                } else {
                    window.alert("Not valid, please enter email and password again")
                }

            } else {
                window.alert("Not valid, please enter email and password again")
            }

        } catch (error) {
            console.log(error)
        }
    }

    const test = () => {
        console.log(logInfo)
    }

    return (
        <Grid container spacing={0} alignItems="center" justifyContent="center">
            <Stack spacing={2} sx={{width: '50ch'}}>
                <Grid container alignItems="center" justifyContent="center" sx={{mb: 2}}>
                    <Typography variant="h4" component="h4">
                        SRM DEV TOOLS
                    </Typography>
                </Grid>
                <Grid>
                    <TextField
                        fullWidth
                        label="Username"
                        type="email"
                        placeholder="Enter email address here"
                        onChange={e => setLogInfo({
                            ...logInfo,
                            identifier: e.target.value
                        })}
                        value={logInfo.identifier}
                    />
                </Grid>
                <Grid>
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        placeholder="Enter email address here"
                        onChange={e => setLogInfo({
                            ...logInfo,
                            password: e.target.value
                        })}
                        value={logInfo.password}
                    />
                </Grid>
                <Divider />
                <Grid>
                    <Button sx={{width: '66ch'}} variant="contained" onClick={authenticate} endIcon={<LoginIcon />}>
                        Sign Up
                    </Button>
                </Grid>
            </Stack>
        </Grid>
    )
}

export default withRouter(Loginpage);
