
module.exports = function solveEquation(equation) {
  // your implementation
 
  var intStr = equation.replace(/\s+/g, '');
 
  var a,b,c;  

  pos1 = intStr.indexOf("x^2");  
  (pos1 > 0) ? a = intStr.substr(0,pos1 - 1) : a = 1;   
 
  pos2 = intStr.indexOf("*x+");
  if (pos2 < 0) pos2 = intStr.indexOf("*x-");
 
  b = +intStr.substr(pos1 + 3, pos2 - pos1 - 3);
 
  (intStr.length > pos2 + 2) ? c = intStr.substr(pos2 + 2, intStr.length) : c = 0;   
 
  var d = b*b - 4*a*c;
  var arr = [];
 
  if (d >= 0) {
    arr.push( Math.round((b*(-1) - Math.sqrt(d)) / (2 * a)) );
    arr.push( Math.round((b*(-1) + Math.sqrt(d)) / (2 * a)) );
  }

  arr = arr.sort((a, b) => a - b);
  return arr;
}