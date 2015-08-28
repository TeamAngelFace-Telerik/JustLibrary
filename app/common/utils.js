var utils = (function(){
	var isValid = function isValid(input, min, max) {
		if(typeof(input) !== 'string' && typeof(input) !== 'number'){
			return false;
		}    
		if (typeof(input) === 'string') {
			return input.length >= min && input.length <= max;	
		}
	    return input >= minLength && input <= maxLength;
	};

	return {
		isValid
	}
}())

export default utils;