describe('Implementation Of API',()=>{
it('get all users',()=>{
cy.request({
    method:'GET',
    url:'https://gorest.co.in/public/v2/users',
    headers:{
     'authorization':"Bearer 84eeb3e76638714618b27c07af709a519ba8575191c6975cf4fcf7efa10e7253"
    }
}).then((res)=>{
    expect(res.status).to.eq(200);
//    expect(res.body.name).to.eq("Vaishvi Kaniyar");
//    expect(res.body.gender).to.eq("female");
//    expect(res.body.status).to.eq("active");
//    expect(res.body.email).to.eq("vaishvi_kaniyar@ziemann.example");
    console.log(res.body);
})
})
})