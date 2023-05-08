import { useState } from "react";

//Material UI
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

//Models
import { PatientDTO } from "../models/dtos/PatientDTO";
import { PatientDTO_Stub } from "../stubs/PatientDTO_Stub";


const Patient = () => {
    const [patientList, setPatientList] = useState(PatientDTO_Stub as PatientDTO[])

    return (
        <div>
            This is patient page;
        </div>
    );
}

export default Patient;