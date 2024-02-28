export const fetchEmployees = async () => {
  const response = await fetch('http://localhost:3020/api/employees');
  if (!response.ok) {
    throw new Error('Failed to fetch employees');
  }
  return await response.json();
};