import { Drawer, List, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const drawerWidth = 240;

const Sidebar = ({ onMenuItemClick }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <List>
        <ListItemButton onClick={() => onMenuItemClick('employees')}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Employees" />
        </ListItemButton>
        <ListItemButton onClick={() => onMenuItemClick('departments')}>
          <ListItemIcon>
            <BusinessCenterIcon />
          </ListItemIcon>
          <ListItemText primary="Departments" />
        </ListItemButton>
        <ListItemButton onClick={() => onMenuItemClick('login')}>
          <ListItemIcon>
            <BusinessCenterIcon />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItemButton>
        <ListItemButton onClick={() => onMenuItemClick('settings')}>
          <ListItemIcon>
            <BusinessCenterIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
