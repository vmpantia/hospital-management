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


const Patient = () => {
    const [patientList, setPatientList] = useState(PatientDTO_Stub as PatientDTO[])

    return (
        <>
            <Title value="Patient" 
                description="In this page you can see all the patients stored in the system." />

            <div className="bg-white p-3 rounded w-full">
                <div className="mb-3 flex justify-between">
                    <section>
                        <button className="text-sm bg-slate-700 hover:bg-slate-600 text-white font-medium px-3 py-1.5 flex rounded">
                            <PlusIcon className="h-5 w-5 mr-2" />
                            Add Patient
                        </button>
                    </section>
                    <section className="flex">
                        <p className="mr-2 mt-0.5 font-medium">Search:</p>
                        <input className="mr-2 px-2 border border-slate-500 rounded focus:outline-1" type="text"></input>
                        <button className="text-sm bg-slate-700 hover:bg-slate-600 text-white font-medium px-3 py-1.5 mr-2 flex rounded">
                            <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
                            Search
                        </button>
                        <button className="text-sm bg-slate-700 hover:bg-slate-600 text-white font-medium px-3 py-1.5 flex rounded">
                            <AdjustmentsVerticalIcon className="h-5 w-5 mr-2" />
                            Filter
                        </button>
                    </section>
                </div>

                <table className="w-full">
                    <thead className="text-xs text-center">
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
                    <tbody className="text-sm text-center">
                        {patientList.map(data => {
                            return (
                                <tr className="border-b" key={data.internalID}>
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