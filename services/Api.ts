// services/api.ts

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);
  return response.json();
};

export const fetchAlbums = async () => {
  const response = await fetch(`${API_URL}/albums`);
  return response.json();
};

export const fetchPhotos = async () => {
  const response = await fetch(`${API_URL}/photos`);
  return response.json();
};

export const fetchUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  return response.json();
};

export const fetchUserProfile = async (userId: number) => {
  const response = await fetch(`${API_URL}/users/${userId}`);
  return response.json();
};

export const fetchPostById = async (postId: number) => {
  const response = await fetch(`${API_URL}/posts/${postId}`);
  return response.json();
};

export const updatePost = async (postId: number, post: { title: string, body: string }) => {
  const response = await fetch(`${API_URL}/posts/${postId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  return response.json();
};

export const loginUser = async (email: string) => {
  const users = await fetchUsers();
  const user = users.find((user: { email: string }) => user.email === email);
  return user;
};
