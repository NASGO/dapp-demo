module.exports = async function () {
  app.registerContract(1000, 'mycontract.deductBalance')
  app.registerContract(1001, 'mycontract.addBalance')
  app.registerContract(1002, 'mycontract.buyGoods')
  app.setDefaultFee('0', 'NSG')
}