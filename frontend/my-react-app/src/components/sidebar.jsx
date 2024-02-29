import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Box,
  Typography,
  Divider,
  IconButton,
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const drawerWidth = 240;

const Sidebar = ({ onMenuItemClick }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <Drawer
        variant={isSidebarOpen ? 'permanent' : 'temporary'}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#2C3E50',
            color: '#ECF0F1',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" sx={{ color: '#ECF0F1' }}>
            My Dashboard
          </Typography>
        </Box>
        <Divider sx={{ backgroundColor: '#34495E' }} />
        <List>
          <ListItemButton onClick={() => onMenuItemClick('employees')}>
            <ListItemIcon>
              <PeopleIcon sx={{ color: '#ECF0F1' }} />
            </ListItemIcon>
            <ListItemText primary="Employees" />
          </ListItemButton>
          <ListItemButton onClick={() => onMenuItemClick('departments')}>
            <ListItemIcon>
              <BusinessCenterIcon sx={{ color: '#ECF0F1' }} />
            </ListItemIcon>
            <ListItemText primary="Departments" />
          </ListItemButton>
        </List>
        <Divider sx={{ backgroundColor: '#34495E', marginTop: 'auto' }} />
        <List sx={{ marginTop: 'auto' }}>
          <ListItemButton onClick={() => onMenuItemClick('login')}>
            <ListItemIcon>
              <LockOpenIcon sx={{ color: '#ECF0F1' }} />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItemButton>
          <ListItemButton onClick={() => onMenuItemClick('settings')}>
            <ListItemIcon>
              <SettingsIcon sx={{ color: '#ECF0F1' }} />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        variant="contained"
        sx={{
          backgroundColor: 'lightgray',
          height: '35px',
          position: 'relative',
          top: '10px', 
          minWidth: 0,
          padding: '5px',
          zIndex: 1, 
        }}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
      </>
  );
};

export default Sidebar;
