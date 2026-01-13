const { test, expect, request } = require('@playwright/test');

const BEARER_TOKEN =
  'curl -H "x-api-key: YOUR_API_KEY" https://reqres.in/api/users?page=2';

test.describe.serial('Reqres API Automation', () => {

  let apiContext;
  let createdUserId;

  test.beforeAll(async () => {
    apiContext = await request.newContext({
      baseURL: 'https://reqres.in',
      extraHTTPHeaders: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
  });

  test('Create user', async () => {
    const response = await apiContext.post('/api/users', {
      data: {
        name: 'Sunil',
        job: 'QA Engineer'
      }
    });

    expect(response.status()).toBe(201);

    const body = await response.json();
    console.log('Create User Response:', body);

    createdUserId = body.id;
  });

  test('Get user details', async () => {
    const response = await apiContext.get('/api/users/2');
    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log('Get User Response:', body);

    expect(body.data.id).toBe(2);
  });

  test('Update created user', async () => {
    const response = await apiContext.put(`/api/users/${createdUserId}`, {
      data: {
        name: 'Sunil Updated',
        job: 'Lead QA Engineer'
      }
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log('Update User Response:', body);

    expect(body.name).toBe('Sunil Updated');
  });

});
