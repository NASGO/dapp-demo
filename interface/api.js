app.route.get('/getBalance/:address',  async function (req) {
  let banlance = app.balances.get(req.params.address, 'NSG');
  balance=bignum(balance).div('100000000').floor().toString()
  return balance;
})