// /* Functions to transform integer decimal number to integer babyl (decimal type) number */

// function getBabylInDec(number) {
// 	var resultLast = number%60;
// 	return calculateBabylInDec(number - number%60 ) + ' ' + resultLast;
// }

// function calculateBabylInDec(number) {
// 	if(Math.floor(number/60) > 60) {
// 		return calculateBabylInDec( Math.floor(number/60) ) + " ";
// 	} else return  Math.floor(number/60);
// }


/* Functions to transform babyl (decimal type) number in string to  */
function parseBabyl(number) {
	
	var result = " " + number%60;
	number = number - number%60;

	if(number >= 60){
		do {
			result = " " + (Math.floor(number/60))%60 + "" + result;
			number /= 10;
		} while (number/60 > 60);
	}
	
	return result;
}