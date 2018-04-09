module.exports = {
  name: 'tables',
  fields: [
    {
      name: 'address',
      type: 'String',
      length: 50,
      not_null: true,
      index: true
    },
    {
      name: 'timestamp',
      type: 'Number',
      not_null: true
    }
  ]
}