import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { fetchEmployees } from '../services/employeeService'; // Adjust import path as needed

const columns = [
  { field: 'id', headerName: 'ID', width: 220, hide: true },
  {
    field: 'fullName', // New field for combined name
    headerName: 'Name',
    width: 150,
    valueGetter: (params) => `${params.row.name.first} ${params.row.name.last}`, // Combine first and last names
  },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90 },
  { field: 'hobbies', headerName: 'Hobbies', width: 180 },
  {
    field: 'departmentName', // Use a separate field for department name
    headerName: 'Department',
    width: 180,
    flex: 1,
    sortable: false,
    valueGetter: (params) => params.row.department?.name || "No Department",
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 100,
    renderCell: (params) => (
      <>
        <IconButton aria-label="delete" size="small" onClick={() => alert('Delete ' + params.id)}>
          <DeleteIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="send email" size="small" onClick={() => alert('Send email to ' + params.row.email)}>
          <MailOutlineIcon fontSize="inherit" />
        </IconButton>
      </>
    ),
  },
];

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees().then((data) => {
      // Extract first and last names for fullName field
      const employeesWithFullNames = data.map((emp) => ({
        ...emp,
        fullName: `${emp.name.first} ${emp.name.last}`, // New property
      }));
      setEmployees(employeesWithFullNames);
    }).catch(console.error);
  }, []);

  return (
    <div style={{ height: 850, width: '98%' }}>
      <DataGrid
        rows={employees}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
      />
    </div>
  );
};

export default EmployeeTable;
