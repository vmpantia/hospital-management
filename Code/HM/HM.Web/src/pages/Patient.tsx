import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import { format } from "date-fns";
import { NIL as NIL_UUID  } from 'uuid';
import axios from "axios";

//Models
import { PatientDTO } from "../models/dtos/PatientDTO";

//Components
import Title from "../components/Title";
import StatusBadge from "../components/Badges/StatusBadge";
import TypeBadge from "../components/Badges/TypeBadge";

//Icons
import Button from "../components/Buttons/Button";
import IconButton from "../components/Buttons/IconButton";
import InputField from "../components/Inputs/InputField";
import Constants from "../models/Constants";
import Loader from "../components/Loader";

const Patient = () => {
    const [patientList, setPatientList] = useState([] as PatientDTO[]);
    const [patient, setPatient] = useState({} as PatientDTO);
    const [modalShow, setModalShow] = useState(false);
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetchData();
            setShowLoading(false);
        }, 500);
    }, [])

    const fetchData = async () => {
        await axios.get(Constants.API + 'GetPatients')
                    .then(response => {
                        if(response.status === 200)
                            setPatientList(response.data);
                    })
                    .catch(err => {
                        toast.error(err.message);
                    });
    }

    const addBtnClicked = () => {
        setModalShow(true);
        setPatient({} as PatientDTO);
    }

    const editBtnClicked = (data:PatientDTO) => {
        setModalShow(true);
        setPatient(data);
    }

    const saveBtnClicked = async (e:any) => {
        e.preventDefault();
        
        let isAdd = patient.internalID === undefined;
        const data:PatientDTO = {
            internalID: isAdd ? NIL_UUID : patient.internalID,
            patientID: "1",
            firstName: patient.firstName,
            middleName: patient.middleName,
            lastName: patient.lastName,
            gender: patient.gender,
            civilStatus: patient.civilStatus,
            birthDate: patient.birthDate,
            contactNo: patient.contactNo,
            emailAddress: patient.emailAddress,
            address: patient.address,
            type: patient.type,
            typeDescription: patient.typeDescription,
            status: isAdd ? Constants.STAT_ENABLED_INT : patient.status,
            statusDescription: isAdd ? Constants.STAT_ENABLED_STRING : patient.statusDescription,
            createdDate: isAdd ? format(new Date(), "yyyy-MM-dd") : patient.createdDate,
            modifiedDate: format(new Date(), "yyyy-MM-dd")
        }
        await axios.post(Constants.API + "SavePatient", 
                        data,
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json',
                            }
                        }
                    )
                    .then(response => {
                        if(response.status === 200) {
                            toast.success(response.data);
                            fetchData();
                        }
                    })
                    .catch(err => {
                        toast.error(err.message);
                    });

        setModalShow(false);
    }

    const closeBtnClicked = () => {
        setModalShow(false);
        setPatient({} as PatientDTO);
    }    
    
    const onPatientValueChange = (e:any) => {
        setPatient(data => {
            return {...data, [e.target.name]: e.target.value}
        });
    }    

    return (
        <>
            <ToastContainer theme="colored" />
            <Title value="Patient" 
                description="In this page you can see all the patients stored in the system." />

            <div className="p-5 w-full border rounded bg-white">
                <div className="mb-3 flex justify-between">
                    <Button text="Add Patient" color="primary" icon="plus" onClickedHandler={addBtnClicked} />
                    <Button text="Advanced Filter" color="info" icon="filter" onClickedHandler={addBtnClicked} />
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
                        {showLoading ? 
                                <tr>
                                    <td className="p-5" colSpan={10}><Loader /></td>
                                </tr>
                            :
                                patientList.length === 0 ? 
                                    <tr>
                                        <td className="p-5" colSpan={10}>No Record Found in the System</td>
                                    </tr>
                                :
                                    patientList.map(data => {
                                        return (
                                            <tr className="border-b odd:bg-white even:bg-gray-100" key={data.internalID}>
                                                <td className="p-2">{<input type="checkbox"></input>}</td>
                                                <td className="p-2 font-medium">{data.patientID}</td>
                                                <td className="p-2">{`${data.lastName}, ${data.firstName}`}</td>
                                                <td className="p-2">{data.contactNo}</td>
                                                <td className="p-2">{data.address}</td>
                                                <td className="p-2"><TypeBadge value={data.type} description={data.typeDescription} /></td>
                                                <td className="p-2"><StatusBadge value={data.status} description={data.statusDescription} /></td>
                                                <td className="p-2">{format(new Date(data.createdDate), "yyyy-MM-dd")}</td>
                                                <td className="p-2">{data.modifiedDate === undefined ? "N/A" : format(new Date(data.modifiedDate), "yyyy-MM-dd")}</td>
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
                                    })
                        }
                    </tbody>
                </table>
            </div>
            
            {modalShow &&
                <form onSubmit={saveBtnClicked}>
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
                                    <InputField type="select" name="gender" label="GENDER" value={patient.gender} datasource={Constants.Gender} onValueChangedHandler={(e) => onPatientValueChange(e)} required />
                                    <InputField type="select" name="civilStatus" label="CIVIL STATUS" value={patient.civilStatus} datasource={Constants.CivilStatus} onValueChangedHandler={(e) => onPatientValueChange(e)} required />
                                    <InputField type="date" name="birthDate" label="BIRTHDATE" value={patient.birthDate} onValueChangedHandler={(e) => onPatientValueChange(e)} required  />
                                </div>

                                <p className="font-medium pb-2 mb-2 mt-4 border-dashed border-b">Contact Details</p>
                                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3">
                                    <InputField type="text" name="contactNo" label="CONTACT NO" value={patient.contactNo} onValueChangedHandler={(e) => onPatientValueChange(e)} required />
                                    <InputField type="email" name="emailAddress" label="EMAIL ADDRESS" value={patient.emailAddress} onValueChangedHandler={(e) => onPatientValueChange(e)} required  />
                                </div>

                                <p className="font-medium pb-2 mb-2 mt-4 border-dashed border-b">Address Details</p>
                                <div className="grid grid-cols-1">
                                    <InputField type="text" name="address" label="ADDRESS" value={patient.address} onValueChangedHandler={(e) => onPatientValueChange(e)} required />
                                </div>
                            </div>
                            
                            <div className="flex justify-end border-t pt-4">
                                <Button text="Save" color="primary" icon="plus" type="submit"/> &nbsp;&nbsp;
                                <Button text="Close" color="secondary" icon="filter" onClickedHandler={closeBtnClicked} />
                            </div>
                        </div>
                    </div>
                </form>
            }
        </>
    );
}

export default Patient;