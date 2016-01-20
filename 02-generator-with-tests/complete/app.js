function generatorFactory(initialValue) {

  return function() {
    return initialValue++;
  }
}
