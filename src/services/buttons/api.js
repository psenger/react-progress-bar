const API_ROOT = `${process.env.API_URL || '/api/v1'}`;

/**
 * call Api is an abstraction of the Fetch API. It is designed to handle all the errors consistently as well as the data.
 * Two notes about the fetch API, it is a polyfill injected via WebPack, and it does not have a time-out feature. It
 * is possible to make it timeout, but this code does not have that.
 *
 * @param {string} endpoint - the URI endpoint assumed to be at the end of the API_URL.
 * @param {*} params - parameters passed to the Fetch API.
 *
 * @returns {*|Promise.<TResult>}
 */
function callApi(endpoint, params) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

  return fetch(fullUrl, params)
    .then((response) => {
      if (response.ok) { // a boolean stating whether the response was successful (status in the range 200-299) or not.
        return response.json();
      }
      let message = 'Server Error';

      try {
        message = response.statusText;
      } catch (e) {
        /* eslint-disable no-console */
        console.log(e);
        /* eslint-enable no-console */
      }
      let status = 500;

      try {
        status = response.status;
      } catch (e) {
        /* eslint-disable no-console */
        console.log(e);
        /* eslint-enable no-console */
      }
      let e = new Error(message);

      e.status = status;
      throw e;
    });
}

/**
 * Fetch All the buttons and bars from the server. No parameters and no Paging.
 *
 * @function
 */
export const fetchButtonBars = () => callApi('/buttons/', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});
