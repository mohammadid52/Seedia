const responseMsg = (status = 'none', message = '', data = {}) => {
  return { status, message, data }
}

module.exports = { responseMsg }
