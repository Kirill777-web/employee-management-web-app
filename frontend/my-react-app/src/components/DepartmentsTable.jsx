import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { fetchDepartments } from '../services/departmentService';

const DepartmentsTable = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchDepartments().then(depts => {
      const departmentsFormatted = depts.map(dept => ({
        ...dept,
        id: dept._id, 
        employees: dept.employees.map(emp => emp.name).join(', ') 
      }));
      setDepartments(departmentsFormatted);
    }).catch(console.error);
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 250},
    { field: 'name', headerName: 'Department Name', width: 250,},
    { field: 'employees', headerName: 'Employees', width: 300, flex: 1, sortable: false } 
  ];

  return (
    <div style={{ height: 600, width: '100%' }}> 
      <DataGrid
        rows={departments}
        columns={columns}
        pageSize={5}
        getRowId={(row) => row.id}
      />
    </div>
  );
};

export default DepartmentsTable;
