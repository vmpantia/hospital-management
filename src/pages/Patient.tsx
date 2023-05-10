import { useState } from "react";
import { format } from "date-fns";

//Models
import { PatientDTO } from "../models/dtos/PatientDTO";
import { PatientDTO_Stub } from "../stubs/PatientDTO_Stub";
import { CivilStatus, Gender } from "../models/Constants";

//Components
import Title from "../components/Title";
import StatusBadge from "../components/Badges/StatusBadge";
import TypeBadge from "../components/Badges/TypeBadge";

//Icons
import Button from "../components/Buttons/Button";
import IconButton from "../components/Buttons/IconButton";
import InputField from "../components/Inputs/InputField";

const Patient = () => {
    const [patientList, setPatientList] = useState(PatientDTO_Stub as PatientDTO[]);
    const [patient, setPatient] = useState({} as PatientDTO);
    const [modalShow, setModalShow] = useState(false);

    const addBtnClicked = () => {
        setModalShow(true);
        setPatient({} as PatientDTO);
    }

    const editBtnClicked = (data:PatientDTO) => {
        setModalShow(true);
        setPatient(data);
    }

    const closeBtnClicked = () => {
        setModalShow(false);
        setPatient({} as PatientDTO);
    }    
    
    const onPatientValueChange = (e:any) => {
        setPatient(data => {
            return {...data, [e.target.name]: [e.target.value]}
        });
    }    

    return (
        <>
            <Title value="Patient" 
                description="In this page you can see all the patients stored in the system." />
            
            <div className="p-5 w-full border rounded bg-white">
                <div className="mb-3 flex justify-between">
                    <Button text="Add Patient" type="primary" icon="plus" onClickedHandler={addBtnClicked} />
                    <Button text="Advanced Filter" type="info" icon="filter" onClickedHandler={addBtnClicked} />
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
                                        <IconButton text="Edit" type="warning" icon="edit" onClickedHandler={() => editBtnClicked(data)} />&nbsp;&nbsp;
                                        <IconButton text="View" type="secondary" icon="view" onClickedHandler={() => editBtnClicked(data)} />&nbsp;&nbsp;
                                        {data.status === 0 ?
                                        <IconButton text="Disable" type="danger" icon="disable" onClickedHandler={() => editBtnClicked(data)} /> : 
                                        <IconButton text="Enable" type="success" icon="enable" onClickedHandler={() => editBtnClicked(data)} />}&nbsp;&nbsp;  
                                        <IconButton text="Delete" type="dark" icon="delete" onClickedHandler={() => editBtnClicked(data)} />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            
            {modalShow &&
                <div className="fixed z-10 p-4 left-0 top-0 w-full h-full overflow-auto bg-gray-900 bg-opacity-50" 
                    aria-labelledby="modal-title" 
                    role="dialog" 
                    aria-modal="true">
                    <div className="bg-white m-auto mt-5 p-4 border rounded w-3/5">
                        <div className="border-b pb-4">
                            header
                        </div>
                        <div className="p-4">

                            <p className="font-medium pb-2 mb-2 border-dashed border-b">Personal Details</p>
                            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3">
                                <InputField type="text" name="firstName" label="FIRST NAME" value={patient.firstName} onValueChangedHandler={(e) => onPatientValueChange(e)} required />
                                <InputField type="text" name="middleName" label="MIDDLE NAME" value={patient.middleName} onValueChangedHandler={(e) => onPatientValueChange(e)} />
                                <InputField type="text" name="lastName" label="LAST NAME" value={patient.lastName} onValueChangedHandler={(e) => onPatientValueChange(e)} required />
                                <InputField type="select" name="gender" label="GENDER" value={patient.gender} datasource={Gender} onValueChangedHandler={(e) => onPatientValueChange(e)} required />
                                <InputField type="select" name="civilStatus" label="CIVIL STATUS" value={patient.civilStatus} datasource={CivilStatus} onValueChangedHandler={(e) => onPatientValueChange(e)} required />
                                <InputField type="date" name="birthDate" label="BIRTHDATE" value={patient.birthDate} onValueChangedHandler={(e) => onPatientValueChange(e)} required  />
                            </div>
                            <p className="font-medium pb-2 mb-2 mt-4 border-dashed border-b">Contact & Address Details</p>
                            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3">
                                <InputField type="text" name="contactNo" label="CONTACT NO" value={patient.contactNo} onValueChangedHandler={(e) => onPatientValueChange(e)} required />
                                <InputField type="text" name="address" label="ADDRESS" value={patient.address} onValueChangedHandler={(e) => onPatientValueChange(e)} required  />
                            </div>
                        </div>
                        
                        <div className="flex justify-end border-t pt-4">
                            <Button text="Save" type="primary" icon="plus" onClickedHandler={closeBtnClicked} /> &nbsp;&nbsp;
                            <Button text="Close" type="secondary" icon="filter" onClickedHandler={closeBtnClicked} />
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default Patient;