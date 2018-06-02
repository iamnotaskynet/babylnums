/*  Functions to transform integer decimal number to integer babyl (decimal type) number js string type*/
function parseBabyl3(number) {
	return number<60 ? (" " + number%60) : ( number==60 ? (number/60 + " 0 "): (" "+parseBabyl3((number - number%60)/60 )+ " " +number%60));
}

/* Returns html unicode of the babyl digit*/
function getDigitUnicode(numbersDigit) {
	var parsedInt = parseInt(numbersDigit);
	switch (parsedInt) {
		case 0:
			return "\u{1244a}"; break;
		case 1:
			return "\u{12415}"; break;
		case 2:
			return "\u{12416}"; break;
		case 3:
			return "\u{12417}"; break;
		case 4:
			return "\u{12418}"; break;
		case 5:
			return "\u{12419}"; break;
		case 6:
			return "\u{1241a}"; break;
		case 7:
			return "\u{1241b}"; break;
		case 8:
			return "\u{1241c}"; break;
		case 9:
			return "\u{1241d}"; break;
		case 10:
			return "𒐞"; break;
		case 11:
			return "𒐞" + "𒐕"; break;
		case 12:
			return "𒐞" + "𒐖"; break;
		case 13:
			return "𒐞" + "𒐗"; break;
		case 14:
			return "𒐞" + "𒐘"; break;
		case 15:
			return "𒐞" + "𒐙"; break;
		case 16:
			return "𒐞" + "𒐚"; break;
		case 17:
			return "𒐞" + "𒐛"; break;
		case 18:
			return "𒐞" + "𒐜"; break;
		case 19:
			return "𒐞" + "𒐝"; break;
		case 20:
			return "𒐟"; break;
		case 21:
			return "𒐟" + "𒐕"; break;
		case 22:
			return "𒐟" + "𒐖"; break;
		case 23:
			return "𒐟" + "𒐗"; break;
		case 24:
			return "𒐟" + "𒐘"; break;
		case 25:
			return "𒐟" + "𒐙"; break;
		case 26:
			return "𒐟" + "𒐚"; break;
		case 27:
			return "𒐟" + "𒐛"; break;
		case 28:
			return "𒐟" + "𒐜"; break;
		case 29:
			return "𒐟" + "𒐝"; break;
		case 30:
			return "𒐠"; break;
		case 31:
			return "𒐠" + "𒐕"; break;
		case 32:
			return "𒐠" + "𒐖"; break;
		case 33:
			return "𒐠" + "𒐗"; break;
		case 34:
			return "𒐠" + "𒐘"; break;
		case 35:
			return "𒐠" + "𒐙"; break;
		case 36:
			return "𒐠" + "𒐚"; break;
		case 37:
			return "𒐠" + "𒐛"; break;
		case 38:
			return "𒐠" + "𒐜"; break;
		case 39:
			return "𒐠" + "𒐝"; break;
		case 40:
			return "𒐡"; break;
		case 41:
			return "𒐡" + "𒐕"; break;
		case 42:
			return "𒐡" + "𒐖"; break;
		case 43:
			return "𒐡" + "𒐗"; break;
		case 44:
			return "𒐡" + "𒐘"; break;
		case 45:
			return "𒐡" + "𒐙"; break;
		case 46:
			return "𒐡" + "𒐚"; break;
		case 47:
			return "𒐡" + "𒐛"; break;
		case 48:
			return "𒐡" + "𒐜"; break;
		case 49:
			return "𒐡" + "𒐝"; break;
		case 50:
			return "𒐢"; break;
		case 51:
			return "𒐢" + "𒐕"; break;
		case 52:
			return "𒐢" + "𒐖"; break;
		case 53:
			return "𒐢" + "𒐗"; break;
		case 54:
			return "𒐢" + "𒐘"; break;
		case 55:
			return "𒐢" + "𒐙"; break;
		case 56:
			return "𒐢" + "𒐚"; break;
		case 57:
			return "𒐢" + "𒐛"; break;
		case 58:
			return "𒐢" + "𒐜"; break;
		case 59:
			return "𒐢" + "𒐝"; break;

		//Must return "ERROR"
		default:
			return "ERROR"; 
			break;
	}
}

function getUnicodesFromeTokenizedArr(arr) {
	var filteredArr = arr.filter(filteringArrOfUnicodes);

	var result = "";
	var index = 0;
	for(var index = 0; index < filteredArr.length; index++) 
		result += " " + getDigitUnicode(filteredArr[index]);
	

	return result;
}

function filteringArrOfUnicodes(value) {
	return 	value != "" &&
			value != " " &&
			value != "ERROR" &&
			value != "undefined";
}