const request=require('supertest')
const app=require('../index')

describe('GET /',()=>{
    it('should return success message'),
    (done)=>{
        request(app)
        .get('/')
        .expect(200)
        .expect('CI/CD pipeline is working!',done)}
});