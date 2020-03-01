function fibonacci(number){

	if (number < 0){
		return false;
	}

	if(Number.isInteger(number) === false){
		return false;
	}
  
	var firstNumber = 0;
	var secondNumber = 1;
	var aux;

	if (firstNumber === number || secondNumber === number ){
		return true;
	}

	while (secondNumber < number){
		aux = secondNumber;
        secondNumber = secondNumber + firstNumber;
        firstNumber = aux;

        if(secondNumber === number){
        	return true;
        }
	}

	return false;
}

