function spaceToDash(str) {
  return str.replace(/\s+/g, "-").toLowerCase();
}

function dashToSpace(str) {
  return str.replace(/-/g, " ").toLowerCase();
}

module.exports = {
  spaceToDash,
  dashToSpace,
};
