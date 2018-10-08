module.exports = async function () {
  app.logger.info('init.js...')

  app.registerContract(1000, 'contract_file.functionName')
  // 5 XAS
  let fee = String(5 * 1e8)
  app.registerFee(1001, fee, 'XAS')
}
