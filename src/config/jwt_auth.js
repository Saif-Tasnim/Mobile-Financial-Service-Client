const token = localStorage.getItem('access-token');

export const JWT_CONFIG = {
  headers: {
    'Authorization': `Bearer ${token}`, 
    'Content-Type': 'application/json' 
  }
};