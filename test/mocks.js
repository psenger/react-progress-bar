
export const mockResponseHelper = (status, statusText, response) => {
  return new window.Response(response, {
    status: status,
    ok: status === 200,
    statusText: statusText,
    headers: {
      'Content-type': 'application/json'
    }
  });
};