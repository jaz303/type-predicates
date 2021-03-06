exports.isString = function(thing) {
    return (typeof thing === 'string') || (thing instanceof String);
}

exports.isNumber = function(thing) {
    return (typeof thing === 'number') || (thing instanceof Number);
}

exports.isInteger = function(thing) {
    return ((typeof thing === 'number') || (thing instanceof Number))
        && ((thing | 0) === (thing + 0));
}

exports.isBoolean = function(thing) {
    return (typeof thing === 'boolean') || (thing instanceof Boolean);
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
        && !Array.isArray(thing);
}

exports.isPlainObjectStrict = function(thing) {
    return (typeof thing === 'object')
        && (thing !== null)
        && !Array.isArray(thing)
        && !(thing instanceof String)
        && !(thing instanceof Number)
        && !(thing instanceof Boolean)
        && !(thing instanceof RegExp);
}

exports.isDefined = function(thing) {
    return typeof thing !== 'undefined';
}

exports.isUndefined = function(thing) {
    return typeof thing === 'undefined';
}

exports.isRegExp = function(thing) {
    return thing instanceof RegExp;
}

exports.exists = function(thing) {
    return (thing !== null)
        && (typeof thing !== 'undefined');
}