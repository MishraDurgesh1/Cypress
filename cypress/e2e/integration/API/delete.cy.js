describe('Implementation of DELETE', () => {
  it("Delete Request", () => {
    cy.request({
      method: 'DELETE',
      url: 'https://gorest.co.in/public/v2/users/3161342',
      headers: {
        'authorization': "Bearer 84eeb3e76638714618b27c07af709a519ba8575191c6975cf4fcf7efa10e7253" //valid for 90 Minutes only
      }
    }).then((res) => {
      expect(res.status).to.eq(204); // 204 represents a successful deletion with no content
    })
  })
})
