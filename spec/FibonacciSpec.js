describe("Fibonacci", function(){

  it("quando é adicionado um dos números iniciais", function() {
  	expect(fibonacci(0)).toEqual(true);
  	expect(fibonacci(1)).toEqual(true);
  });

  it("quando é adicionado um número que pertence a sequência", function() {
    expect(fibonacci(5)).toEqual(true);
    expect(fibonacci(8)).toEqual(true);
  });

  it("quando é adicionado um número que não pertence a sequência", function() {
    expect(fibonacci(4)).toEqual(false);
    expect(fibonacci(10)).toEqual(false);
  });

  it("quando é adicionado um número negativo", function() {
    expect(fibonacci(-4)).toEqual(false);
    expect(fibonacci(-1)).toEqual(false);
  });

  it("quando é adicionado um número real", function() {
    expect(fibonacci(3.2)).toEqual(false);
    expect(fibonacci(6.1)).toEqual(false);
  });

  
});