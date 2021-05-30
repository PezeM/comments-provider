export const fetcher = async (url, token) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json', token }),
    credentials: 'same-origin',
  });

  return response.json();
};
