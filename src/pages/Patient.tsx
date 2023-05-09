import { useState } from "react";
import { format } from "date-fns";

//Models
import { PatientDTO } from "../models/dtos/PatientDTO";
import { PatientDTO_Stub } from "../stubs/PatientDTO_Stub";
import Title from "../components/Title";


const Patient = () => {
    const [patientList, setPatientList] = useState(PatientDTO_Stub as PatientDTO[])

    return (
        <>
            <Title value="Patient" 
                description="In this page you can see all the patients stored in the system." />

            <div className="bg-white inline-flex p-3 rounded w-full">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th><input type="checkbox"></input></th>
                            <th>Patient ID</th>
                            <th>Name</th>
                            <th>Contact No.</th>
                            <th>Address</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Created Date</th>
                            <th>Modified Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patientList.map(data => {
                            return (
                                <tr key={data.internalID}>
                                    <td>{<input type="checkbox"></input>}</td>
                                    <td>{data.patientID}</td>
                                    <td>{`${data.lastName}, ${data.firstName}`}</td>
                                    <td>{data.contactNo}</td>
                                    <td>{data.address}</td>
                                    <td>{data.typeDescription}</td>
                                    <td>{data.statusDescription}</td>
                                    <td>{format(data.createdDate, "yyyy-MM-dd")}</td>
                                    <td>{format(data.modifiedDate, "yyyy-MM-dd")}</td>
                                    <td>
                                        <button>Edit</button>
                                        <button>View</button>
                                        <button>Enable</button>
                                        <button>Disable</button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            
        </>
    );
}

export default Patient;