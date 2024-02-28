export const fetchDepartments = async () => {
  const response = await fetch('http://localhost:3020/api/departments');
  if (!response.ok) {
    throw new Error('Failed to fetch departments');
  }
  return await response.json();
};