describe("Fizzbuzz", function(){

  it("deve retornar fizz se o valor for multiplo de 3", function() {
  	expect(fizzbuzz(3)).toEqual("Fizz");
  	expect(fizzbuzz(981)).toEqual("Fizz");
  });

  it("deve retornar buzz se o valor for multiplo de 5", function() {
  	expect(fizzbuzz(5)).toEqual("Buzz");
  	expect(fizzbuzz(770)).toEqual("Buzz");
  });

  it("deve retornar FizzBuzz se o valor for multiplo de 5 e de 3", function(){
  	expect(fizzbuzz(15)).toEqual("FizzBuzz");
  	expect(fizzbuzz(30)).toEqual("FizzBuzz");
  });

  it("deve retornar valor caso seja igual a 1 e 2", function(){
  	expect(fizzbuzz(1)).toEqual(1);
  	expect(fizzbuzz(2)).toEqual(2);
  });

  it("deve retornar valor caso seja 7 e 11", function(){
  	expect(fizzbuzz(7)).toEqual(7);
  	expect(fizzbuzz(11)).toEqual(11);
  });

});