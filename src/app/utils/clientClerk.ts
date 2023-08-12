import axios from 'axios';

const clerkApi = axios.create({
  baseURL: 'https://api.clerk.dev/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer sk_test_ObSTTe1bHSkMNwjbAzqgZI8oztcaak9t6D7yN3dOWA', // Substitua pela sua chave de API Clerk
  },
});

async function getUsers() {
  try {
    const response = await clerkApi.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

export { getUsers };
