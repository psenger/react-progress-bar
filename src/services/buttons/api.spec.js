import { mockResponseHelper } from '../../../test/mocks';
import { fetchButtonBars } from './api';

describe('API:', () => {
  it('should handle a 500 error', async () => {
    const error = new Error('Server Error');
    error.status = 500;
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve(mockResponseHelper(500, 'Server Error', null)));
    await expect(fetchButtonBars()).rejects.toMatchObject(error);

  });
  it('should handle a 404 error', async () => {
    const error = new Error('Not Found');
    error.status = 404;
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve(mockResponseHelper(404, 'Not Found', null)));
    await expect(fetchButtonBars()).rejects.toMatchObject(error);
  });
  it('should handle a 401 error', async () => {
    const error = new Error('Permission Denied');
    error.status = 401;
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve(mockResponseHelper(401, 'Permission Denied', null)));
    await expect(fetchButtonBars()).rejects.toMatchObject(error);
  });
  it('should return 200 with the object', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve(mockResponseHelper(200, null, JSON.stringify({
      'buttons': [
        32,
        33,
        -8,
        -16
      ],
      'bars': [
        69,
        51,
        19
      ]
    }))));
    await expect(fetchButtonBars()).resolves.toMatchObject({
      'buttons': [
        32,
        33,
        -8,
        -16
      ],
      'bars': [
        69,
        51,
        19
      ]
    });
  });
});