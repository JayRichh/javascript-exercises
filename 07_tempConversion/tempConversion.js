const ftoc = function(far) {
  far = (far - 32) * 5 / 9;
  far = far.toFixed(1);
  far = Math.round(far * 10) / 10;
  return far;
}

const ctof = function(cel) {
  cel = cel * 9 / 5 + 32;
  cel = cel.toFixed(1);
  cel = Math.round(cel * 10) / 10;
  return cel;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
