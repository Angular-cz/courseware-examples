describe('generatorFactory', function() {

  it('is a function (TODO 1)', function() {
    expect(typeof generatorFactory).toBe('function');
  });

  it('return function when call (TODO 2.1)', function() {
    expect(typeof generatorFactory(0)).toBe('function');
  });

});

describe('generator with 0 as initialValue', function() {
  beforeEach(function() {
    this.generator = generatorFactory(0);
  });

  it('return 0 as first value (TODO 2.2)', function() {
    expect(this.generator()).toBe(0);
  });

  it('return incremented values as next (TODO 2.2)', function() {
    var generatedValue = this.generator();

    expect(this.generator()).toBe(generatedValue+1);
    expect(this.generator()).toBe(generatedValue+2);
  });

});


