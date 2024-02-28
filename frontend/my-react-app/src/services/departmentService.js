
/* eslint-env node */
export const fetchDepartments = async () => {
  console.log('API URL:', process.env.REACT_APP_API_URL);
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/departments`);
  if (!response.ok) {
    throw new Error('Failed to fetch departments');
  }
  return await response.json();
};