import { PatientDTO } from "../models/dtos/PatientDTO";
import { v4 as uuidv4 } from 'uuid';

export const PatientDTO_Stub : PatientDTO[] = [ 
    {
        internalID: uuidv4(),
        patientID: "1",
        firstName: "Vincent",
        lastName: "Pantia",
        middleName: "Marino",
        gender: "Female",
        civilStatus: "Single",
        birthDate: "1999-06-12",
        contactNo: "09090957142",
        emailAddress: "vincent.m.pantia@hotmail.com",
        address: "Quezon City",
        type: 1,
        typeDescription: "Out-Patient",
        status: 1,
        statusDescription: "Disabled",
        createdDate: new Date,
        modifiedDate: new Date,
    }
]