function generator(initialValue) {

  return function() {
    return initialValue++;
  };
}

var gen1 = generator(0);
console.log(gen1());
console.log(gen1());
console.log(gen1());
