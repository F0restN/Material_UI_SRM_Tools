import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import Box from "@mui/material/Box";

const InputRow = ({id, setId, day, setDay}) => {
    // const [id, setId] = useState("")
    // const [day, setDay] = useState("")

    return (
        <div>
            <TextField
                label="Course ID"
                onChange={(e) => {
                    setId(e.target.value)
                }}
                value={id}
            />
            <TextField
                label="Course Day"
                onChange={(e) => {
                    setDay(e.target.value)
                }}
                value={day}
            />
        </div>
    );
};

export default InputRow;