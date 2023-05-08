import { useState } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

//Models
import { PatientDTO } from "../models/dtos/PatientDTO";
import { stubPatientDTO } from "../stubs/stubPatientDTO";

const Patient = () => {
    const [patientList, setPatientList] = useState(stubPatientDTO as PatientDTO[])

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {patientList.map((row) => (
                            <TableRow key={row.internalID} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row.lastName}
                                </TableCell>
                                <TableCell align="right">{row.gender}</TableCell>
                                <TableCell align="right">{row.civilStatus}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default Patient;