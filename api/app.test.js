const app = require('./index');
const supertest = require('supertest');
const request = supertest(app);

test('server returns Hello World!', async () => {
  const response = await request.get('/');
  expect(response.text).toBe('<h1>Hello, World!</h1>');
});
