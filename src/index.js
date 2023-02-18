
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let towel = [];
  if (matrix == undefined || matrix.length == 0) {
    return [];
  }

  for(let i = 0; i < matrix.length; i++){
    if(i % 2 != 0){
    towel.push(...matrix[i].reverse());
    } else{
    towel.push(...matrix[i]);
    }
  }
  return towel;
}
