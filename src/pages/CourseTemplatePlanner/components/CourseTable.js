import React, {useState} from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

const CourseTable = ({data}) => {
    const [courses, setCourses] = useState(data)

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">#&nbsp;</TableCell>
                        <TableCell>Course Title</TableCell>
                        <TableCell align="right">Day & Time&nbsp;(g)</TableCell>
                        <TableCell align="right">Term&nbsp;(g)</TableCell>
                        <TableCell align="right">Year&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {courses.map((row) => (
                        <TableRow
                            key={row.courseId}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell align="right">{row.courseId}</TableCell>
                            <TableCell component="th" scope="row">
                                {row.courseTitle}
                            </TableCell>
                            <TableCell align="right">{row.courseDay}</TableCell>
                            <TableCell align="right">{row.courseTerm}</TableCell>
                            <TableCell align="right">{row.courseYear}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CourseTable;