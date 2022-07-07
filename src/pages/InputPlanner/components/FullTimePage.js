import React, {useState} from 'react';
import {Button, Container, Stack, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import InputRow from "./InputRow";

const InputPlanner = () => {
    const [template, setTemplate] = useState([])
    const [term, setTerm] = useState("")
    const [plan, setPlan] = useState([])
    const [id1, setId1] = useState("")
    const [id2, setId2] = useState("")
    const [id3, setId3] = useState("")
    const [day1, setDay1] = useState("")
    const [day2, setDay2] = useState("")
    const [day3, setDay3] = useState("")


    const reset = () => {
        setTerm("")
        setDay1("")
        setDay2("")
        setDay3("")
        setId1("")
        setId2("")
        setId3("")
    }

    const handleSubmit = () => {
        setTemplate([
            ...template,
            {
                "term": term,
                "courses": [
                    {
                        "courseId": Number(id1),
                        "courseDay": day1
                    },
                    {
                        "courseId": Number(id2),
                        "courseDay": day2
                    },
                    {
                        "courseId": Number(id3),
                        "courseDay": day3
                    }
                ]
            }
        ])
        reset()
    }

    const handleSave = () => {
        console.log(template)
    }

    return (
        <Container>
            <Box component="form" sx={{'& .MuiTextField-root': {mb: 1.2, mr: 1.2, width: '30ch', alignItems: 'left'}}}>
                <TextField fullWidth label="TERM" onChange={(e) => {setTerm(e.target.value)}} component={""} value={term}/>
                <InputRow id={id1} setId={setId1} day={day1} setDay={setDay1}/>
                <InputRow id={id2} setId={setId2} day={day2} setDay={setDay2}/>
                <InputRow id={id3} setId={setId3} day={day3} setDay={setDay3}/>
            </Box>

            <Box sx={{mt: 1.2}}>
                <Stack spacing={1.2} direction="row">
                    <Button variant="contained" onClick={handleSubmit}>
                        SUBMIT
                    </Button>
                    <Button variant="contained" color="success" onClick={handleSave}>
                        EXPORT
                    </Button>
                </Stack>
            </Box>
        </Container>
    );
};

export default InputPlanner;