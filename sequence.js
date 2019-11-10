function sequence(number = 0, step = 1) {
  let chek = 0;

  return function generator(){
    if (chek === 0) {
      chek++;
      return number;
    }
    return number += step;
  }
}

var generator = sequence(10, 3);
var generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator2()); // 7

console.log(generator()); // 16

console.log(generator2()); // 8