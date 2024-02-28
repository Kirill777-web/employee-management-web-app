import { useState, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme, CssBaseline, Box, Toolbar } from '@mui/material';
import { ThemeProvider, useTheme } from './theme/ThemeContext'; 
import Sidebar from './components/sidebar';
import EmployeeTable from './components/EmployeeTable';
import DepartmentsTable from './components/DepartmentsTable';
import Login from './components/login';
import Settings from './components/settings';
import { fetchEmployees } from './services/employeeService';

//light and dark themes
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Blue
    },
    secondary: {
      main: '#dc004e', // Pink
    },
    background: {
      default: '#f0f2f5', // Light gray
      paper: '#ffffff',
    },
    text: {
      primary: '#2e2e2e',
      secondary: '#575757',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Light blue
    },
    secondary: {
      main: '#f48fb1', // Light pink
    },
    background: {
      default: '#121212', // Soft black
      paper: '#1e1e1e',
    },
    text: {
      primary: '#e0e0e0',
      secondary: '#bbbbbb',
    },
  },
});

function ThemedApp() {
  const [content, setContent] = useState('employees');
  const [employees, setEmployees] = useState([]);
  const { mode } = useTheme(); // Use the current theme mode

  useEffect(() => {
    fetchEmployees().then(setEmployees).catch(console.error);
  }, []);

  // based on the current mode
  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline /> 
      <Box sx={{ display: 'flex' }}>
        <Sidebar onMenuItemClick={(menuItem) => setContent(menuItem)} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: `calc(100% - 240px)`,
            height: '100%',
          }}
        >
          <Toolbar />
          {content === 'employees' && <EmployeeTable employees={employees} />}
          {content === 'departments' && <DepartmentsTable />}
          {content === 'login' && <Login />}
          {content === 'settings' && <Settings />}
        </Box>
      </Box>
    </MuiThemeProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

export default App;
