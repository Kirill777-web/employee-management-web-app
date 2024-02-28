import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { fetchEmployees } from '../services/employeeService'; // Adjust import path as necessary

const columns = [
  { field: 'id', headerName: 'ID', width: 220, hide: true },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 220 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90 },
  { field: 'hobbies', headerName: 'Hobbies', width: 180 },
  {
  field: 'department', 
  headerName: 'Department', 
  width: 200, 
  flex: 1,
  sortable: false,
  valueGetter: (params) => params.row.department?.name || "No Department"
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
    fetchEmployees().then(data => {
      const employeesWithDeptNames = data.map(emp => ({
        ...emp,
        id: emp._id,
      }));
      setEmployees(employeesWithDeptNames);
    }).catch(console.error);
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={employees}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default EmployeeTable;
