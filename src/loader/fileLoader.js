module.exports = function (source) {
  return `export default "data:img/jpeg;base64,${source.toString('base64')}"`;
};

module.exports.raw = true;
