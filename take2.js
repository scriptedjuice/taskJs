function take(gen, count){
  let arr = [];

  for (let i = 0; i < count; i++){
    arr.push( gen() );
  }

  return arr;
}
