let bignum = require('bignumber');
module.exports = {
  deductBalance: async function(arg) {
  	let amount=1;
    amount = bignum(amount).mul('200000000').floor().toString()
    let balance = app.balances.get(this.trs.senderId, 'NSG')
    if (balance.lt(amount)) return 'Insufficient balance';
    app.balances.decrease(this.trs.senderId, "NSG", amount)
  },
  addBalance: async function(arg) {
  	let amount=1;
  	let amount = bignum(amount).mul('200000000').floor().toString()
  	app.balances.increase(this.trs.senderId, "NSG", amount)
  },
  buyGoods: async function(arg) {
  	let amount=1;
    price = bignum(amount).mul('200000000').floor().toString()
    let balance = app.balances.get(this.trs.senderId, 'NSG')
    if (balance.lt(price)) return 'Insufficient balance';
    app.sdb.create('table', {
      timestamp: this.trs.timestamp,
      address: this.trs.senderId
    })
    app.balances.decrease(this.trs.senderId, "NSG", price)
  }
}