

// Do not use test DB because I am only fetching data from db
// I used it if i need to update or delete data



import request from 'supertest';
let app:any;


  
describe('/api/data',()=>{
    beforeEach(()=> {

      app=require('../index')}); 
    afterEach(() =>{app.close();}) 
describe('GET /',()=>{
  jest.setTimeout(10*1000);
  it('should return all data', async()=>{
    const res = await request(app).get('/api/data?c=AT&dateFrom=2021-W05&dateTo=2021-W49&range=5');
     expect(res.status).toBe(200)
  });
});
});
