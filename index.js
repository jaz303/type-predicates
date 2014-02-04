exports.isString = function(thing) {
	return typeof thing === 'string';
}

exports.isNumber = function(thing) {
	return typeof thing === 'number';
}

exports.isInteger = function(thing) {
	return typeof thing === 'number' && ((thing | 0) === thing);
}

exports.isBoolean = function(thing) {
	return typeof thing === 'boolean';
}

exports.isArray = function(thing) {
	return Array.isArray(thing);
}

exports.isFunction = function(thing) {
	return typeof thing === 'function';
}

exports.isNull = function(thing) {
	return thing === null;
}

exports.isNotNull = function(thing) {
	return thing !== null;
}

exports.isObject = function(thing) {
	return (typeof thing === 'object')
		&& (thing !== null)
		&& (!Array.isArray(thing));
}

exports.isDefined = function(thing) {
	return typeof thing !== 'undefined';
}

exports.isUndefined = function(thing) {
	return typeof thing === 'undefined';
}

exports.isPresent = function(thing) {
	return (thing !== null) && (typeof thing !== 'undefined');
}