const ftoc = function(fTemp) {
  let cTemp = (fTemp - 32) * 5 / 9;
  return cTemp.toPrecision(1); 
};

const ctof = function(cTemp) {
  let fTemp = (cTemp + 32) * 9 / 5;
  return fTemp.toPrecision(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
