const request = require('supertest');
const app = require('../app');

const email = 'oyster@gmail.com';
/********************************** Dashboard ************************************/
test('Should return array of publications', async () => {
    const response = await request(app).post('/auth/login').send({ email });
    const { token } = await response.body.authData;
    await request(app)
        .get('/dashboard/publications')
        .set('Authorization', `Bearer ${token}`)
        .send()
        .expect(200);
});

test('Should return unauthorize code', async () => {
    await request(app)
        .get('/dashboard/publications')
        .set('Authorization', `Bearer 123`)
        .send()
        .expect(401);
});