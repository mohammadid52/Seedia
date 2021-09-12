const responseMsg = (status = 'none', message = '', data = {}) => {
  return { status, message, data }
}

const unique = (list) => [...new Set(list)]

module.exports = { responseMsg, unique }
