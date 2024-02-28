
/* eslint-env node */
export const fetchEmployees = async () => {
  console.log('API URL:', process.env.REACT_APP_API_URL);
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/employees`);
  if (!response.ok) {
    throw new Error('Failed to fetch employees');
  }
  return await response.json();
};
