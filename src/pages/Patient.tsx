import { useState } from "react";
import { format } from "date-fns";

//Models
import { PatientDTO } from "../models/dtos/PatientDTO";
import { PatientDTO_Stub } from "../stubs/PatientDTO_Stub";

//Components
import Title from "../components/Title";
import StatusBadge from "../components/StatusBadge";
import TypeBadge from "../components/TypeBadge";

//Icons
import { AdjustmentsVerticalIcon, MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/solid";
import Button from "../components/Button";
import IconButton from "../components/IconButton";


const Patient = () => {
    const [patientList, setPatientList] = useState(PatientDTO_Stub as PatientDTO[])

    return (
        <>
            <Title value="Patient" 
                description="In this page you can see all the patients stored in the system." />

            <div className="bg-white p-5 rounded w-full">
                <div className="mb-3 flex justify-between">
                    <section>
                        <Button text="Add Patient" type="primary" icon="plus" />
                    </section>
                    <section>
                        <Button text="Advanced Filter" type="info" icon="filter" />
                    </section>
                </div>

                <table className="w-full text-xs text-center">
                    <thead>
                        <tr className="border-b">
                            <th className="p-2"><input type="checkbox"></input></th>
                            <th className="p-2">Patient ID</th>
                            <th className="p-2">Name</th>
                            <th className="p-2">Contact No.</th>
                            <th className="p-2">Address</th>
                            <th className="p-2">Type</th>
                            <th className="p-2">Status</th>
                            <th className="p-2">Created Date</th>
                            <th className="p-2">Modified Date</th>
                            <th className="p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patientList.map(data => {
                            return (
                                <tr className="border-b odd:bg-white even:bg-gray-100" key={data.internalID}>
                                    <td className="p-2">{<input type="checkbox"></input>}</td>
                                    <td className="p-2 font-medium">{data.patientID}</td>
                                    <td className="p-2">{`${data.lastName}, ${data.firstName}`}</td>
                                    <td className="p-2">{data.contactNo}</td>
                                    <td className="p-2">{data.address}</td>
                                    <td className="p-2"><TypeBadge value={data.type} description={data.typeDescription} /></td>
                                    <td className="p-2"><StatusBadge value={data.status} description={data.statusDescription} /></td>
                                    <td className="p-2">{format(data.createdDate, "yyyy-MM-dd")}</td>
                                    <td className="p-2">{format(data.modifiedDate, "yyyy-MM-dd")}</td>
                                    <td className="p-2">
                                        <IconButton text="Edit" type="warning" icon="edit" />&nbsp;&nbsp;
                                        <IconButton text="View" type="secondary" icon="view" />&nbsp;&nbsp;
                                        {data.status === 0 ?
                                        <IconButton text="Disable" type="danger" icon="disable" /> : 
                                        <IconButton text="Enable" type="success" icon="enable" />}&nbsp;&nbsp;  
                                        <IconButton text="Delete" type="dark" icon="delete" />
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