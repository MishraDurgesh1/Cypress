describe('Implementation of PATCH', () => {
  it("Patch Request", () => {
    cy.request({
      method: 'PATCH',
      url: 'https://gorest.co.in/public/v2/users/3161270', // Replace {user_id} with the actual user ID you want to update
      headers: {
        'authorization': "Bearer 84eeb3e76638714618b27c07af709a519ba8575191c6975cf4fcf7efa10e7253"
      },
      body: {
        "name": "updated_name",
        "status": "inactive"
      }
    }).then((res) => {
      expect(res.status).to.eq(200);
       if (res.status === 200) {
                  // Condition if the response status is 200
                  expect(res.body.name).to.eq("updated_name"); // Asserting the updated name
                  expect(res.body.status).to.eq("inactive"); // Asserting the updated status
                } else {
                  expect(res.body.name).to.eq('durgesh1');
                }
    })

  })
})
