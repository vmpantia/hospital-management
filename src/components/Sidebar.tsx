import { useState } from 'react';

//Material UI
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Box, Divider, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const Sidebar = () => {

    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleListItemClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
      index: number) => {
      setSelectedIndex(index);
    };

    return(
        <Box sx={{ width: '100%', maxWidth: 250, bgcolor: 'background.paper', fontSize: 5 }}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItemButton
                sx={{fontSize: 12}}
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                </ListItemButton>
                <ListItemButton
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
                >
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
                </ListItemButton>
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folder">
                <ListItemButton
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
                >
                <ListItemText primary="Trash" />
                </ListItemButton>
                <ListItemButton
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}
                >
                <ListItemText primary="Spam" />
                </ListItemButton>
            </List>
            </Box>
    );
}

export default Sidebar;