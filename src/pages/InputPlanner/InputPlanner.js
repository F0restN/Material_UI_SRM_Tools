import React, {useState} from 'react';
import {Breadcrumbs, Button, Container, Link, Stack, TextField, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import InputRow from "./components/InputRow";
import FullTimePage from "./components/FullTimePage";
import PartTimePage from "./components/PartTimePage";

const InputPlanner = () => {

    const [type, setType] = useState(true)

    const handleNavigate = () => {
        setType(!type)
    }

    return (
        <Container>
            <Box sx={{mb: 2.5}}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Typography color="text.primary">
                        Select correspondent template format
                    </Typography>
                    <Link component="button" underline="hover" color="inherit" onClick={handleNavigate}>
                        Full-Time
                    </Link>
                    <Link component="button" underline="hover" color="inherit" onClick={handleNavigate} >
                        Part-Time
                    </Link>
                </Breadcrumbs>
            </Box>
            <Box>
                {type ? <FullTimePage/> : <PartTimePage/>}
            </Box>
        </Container>
    );
};

export default InputPlanner;