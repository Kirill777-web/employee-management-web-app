
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
export const fetchEmployees = async () => {
  const response = await fetch(`${apiUrl}/api/departments`);
  if (!response.ok) {
    throw new Error('Failed to fetch employees');
  }
  return await response.json();
};
