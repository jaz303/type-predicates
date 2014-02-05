var test = require('tape'),
	tp = require('../');

test(function(assert) {

	[	[1, 'isNumber', 'isInteger', 'isNotNull', 'isDefined', 'exists'],
		[1.23, 'isNumber', 'isNotNull', 'isDefined', 'exists'],
		[true, 'isBoolean', 'isNotNull', 'isDefined', 'exists'],
		["foobar", 'isString', 'isNotNull', 'isDefined', 'exists'],
		[[1,2,3], 'isArray', 'isObject', 'isNotNull', 'isDefined', 'exists'],
		[function() {}, 'isFunction', 'isNotNull', 'isDefined', 'exists'],
		[null, 'isNull', 'isDefined'],
		[{}, 'isObject', 'isPlainObject', 'isPlainObjectStrict', 'isDefined', 'isNotNull', 'exists'],
		[undefined, 'isUndefined', 'isNotNull'],

		[new String("floogle"), 'isString', 'isObject', 'isPlainObject', 'isNotNull', 'isDefined', 'exists'],
		[new Number(123.45), 'isNumber', 'isObject', 'isPlainObject', 'isNotNull', 'isDefined', 'exists'],
		[new Number(123), 'isNumber', 'isInteger', 'isPlainObject', 'isObject', 'isNotNull', 'isDefined', 'exists'],
		[new Boolean(true), 'isBoolean', 'isObject', 'isPlainObject', 'isNotNull', 'isDefined', 'exists']

	].forEach(function(example) {

		var value = example.shift();

		Object.keys(tp).forEach(function(pred) {
			if (example.indexOf(pred) >= 0) {
				assert.ok(tp[pred](value), '' + value + ' ' + pred);
			} else {
				assert.notOk(tp[pred](value), '' + value + ' !' + pred);
			}
		});

	});

	assert.end();

});