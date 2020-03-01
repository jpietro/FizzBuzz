describe("Fibonacci", function(){

  it("quando � adicionado um dos n�meros iniciais", function() {
  	expect(fibonacci(0)).toEqual(true);
  	expect(fibonacci(1)).toEqual(true);
  });

  it("quando � adicionado um n�mero que pertence a sequ�ncia", function() {
    expect(fibonacci(5)).toEqual(true);
    expect(fibonacci(8)).toEqual(true);
  });

  it("quando � adicionado um n�mero que n�o pertence a sequ�ncia", function() {
    expect(fibonacci(4)).toEqual(false);
    expect(fibonacci(10)).toEqual(false);
  });

  it("quando � adicionado um n�mero negativo", function() {
    expect(fibonacci(-4)).toEqual(false);
    expect(fibonacci(-1)).toEqual(false);
  });

  it("quando � adicionado um n�mero real", function() {
    expect(fibonacci(3.2)).toEqual(false);
    expect(fibonacci(6.1)).toEqual(false);
  });

  
});