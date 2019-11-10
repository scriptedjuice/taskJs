
function map(fn, array){
  let newArray = [];
  
  for (let i = 0; i < array.length; i++){
    newArray.push( fn(array[i]) );
  }

  return newArray;
}