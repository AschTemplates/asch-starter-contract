module.exports = {
  functionName: async function (parameter_1) {
    // validate parameter
    app.validate('string', parameter_1, { length: { maximum: 4096 }})

    // lock contract call for this sender for one block interval (~10 seconds)
    app.sdb.lock(`functionName@${this.trs.senderId}`)

    let id_field = app.autoID.increment('realmodel_max_id')
    let corresponding_transaction = this.trs.id
    let senderId_of_transaction = this.block.senderId
    let block_timestamp = this.block.timestamp

    // create DB entry
    app.sdb.create('RealDatModels', {
      id_field: id_field,
      corresponding_transaction: corresponding_transaction,
      senderId_of_transaction: senderId_of_transaction,
      block_timestamp: block_timestamp,
      random_field: parameter_1
    })
  }
}
