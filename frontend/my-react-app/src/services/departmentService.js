
export const fetchDepartments = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/departments`);
  if (!response.ok) {
    throw new Error('Failed to fetch departments');
  }
  return await response.json();
};