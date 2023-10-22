module.exports = function (api) {
    api.caching(true)
    return {
      plugins: ['macros'],
    }
  }
