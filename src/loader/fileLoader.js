module.exports = function (source) {
  const base64 = source.toString('base64')
  return `export default "data:img/jpeg;base64,${base64}"`;
};

module.exports.raw = true;
