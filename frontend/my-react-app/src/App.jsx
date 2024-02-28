import { useState, useEffect } from 'react';
import Sidebar from './components/sidebar';
import EmployeeTable from './components/EmployeeTable';
import DepartmentsTable from './components/DepartmentsTable';
import { fetchEmployees } from './services/employeeService'; // Adjust the path as necessary
import { Box, CssBaseline, Toolbar } from '@mui/material';

function App() {
  const [content, setContent] = useState('employees');
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees().then(setEmployees).catch(console.error);
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar onMenuItemClick={(menuItem) => setContent(menuItem)} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - 240px)`, // Adjust this value based on your sidebar width
          height: '100%',
        }}
      >
        <Toolbar />
        {content === 'employees' && <EmployeeTable employees={employees} />}
        {content === 'departments' && <DepartmentsTable />}
      </Box>
    </Box>
  );
}

export default App;
