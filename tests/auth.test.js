const request = require('supertest');
const app = require('../app');

const email = 'oyster@gmail.com';
/********************************** Login ************************************/
test('Should login a user register in the db (data.json file)', async () => {
    await request(app)
        .post('/auth/login')
        .send({
            email
        })
        .expect(200);
});

test('Should NOT login a user', async () => {
    await request(app)
        .post('/auth/login')
        .send({
            email: 'usernoregistered@gmail.com'
        })
        .expect(401);
});