var toString = Object.prototype.toString;

exports.isString = function(thing) {
	return toString.call(thing) === '[object String]';
}

exports.isNumber = function(thing) {
	return toString.call(thing) === '[object Number]';
}

exports.isInteger = function(thing) {
	return (toString.call(thing) === '[object Number]')
			&& ((thing | 0) === (0 + thing));
}

exports.isBoolean = function(thing) {
	return toString.call(thing) === '[object Boolean]';
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
	return (thing !== null) && (typeof thing === 'object');
}

exports.isPlainObject = function(thing) {
	return (typeof thing === 'object')
		&& (thing !== null)
		&& (!Array.isArray(thing));
}

exports.isPlainObjectStrict = function(thing) {
	return (typeof thing === 'object')
		&& (thing !== null)
		&& (!Array.isArray(thing))
		&& !(thing instanceof String)
		&& !(thing instanceof Number)
		&& !(thing instanceof Boolean);
}

exports.isDefined = function(thing) {
	return typeof thing !== 'undefined';
}

exports.isUndefined = function(thing) {
	return typeof thing === 'undefined';
}

exports.exists = function(thing) {
	return (thing !== null) && (typeof thing !== 'undefined');
}