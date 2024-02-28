import process from 'process';
export const fetchEmployees = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/employees`);
  if (!response.ok) {
    throw new Error('Failed to fetch employees');
  }
  return await response.json();
};
