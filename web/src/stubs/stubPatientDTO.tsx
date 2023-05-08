import { PatientDTO } from "../models/dtos/PatientDTO";

export const stubPatientDTO : PatientDTO[] = [ 
    {
        internalID: uuid();
    }
]