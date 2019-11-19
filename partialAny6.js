/*function partialAny(fn, ...args) {
    return (...args2) => {
      return fn(...args.map(arg => arg === undefined ? args2.shift() : arg), ...args2)
    }
}
ideal version(with hint)
*/

function partialAny(fn, ...args) {

  let lastUndef;
  let flag = 0;

  return function(...restArgs){

    if (lastUndef !== undefined && flag == 1){
      args[lastUndef] = restArgs.shift();
    }

    for(let i = 0; i < args.length; i++){
      if (args[i] === undefined){
          args[i] = restArgs.shift();
          lastUndef = i;
          flag = 1;
      } 
    }
    return fn(...args.concat(restArgs))
}
}


function test(a, b, c) { return 'a=' + a + ',b=' + b + ',c=' + c; }

let test1_3 = partialAny(test, 1, undefined, 3);

console.log(test1_3(5));
console.log(test1_3(6));