const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
export const fetchDepartments = async () => {
  const response = await fetch(`${apiUrl}/api/departments`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};