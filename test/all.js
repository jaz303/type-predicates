var test = require('tape'),
	tp = require('../');

test(function(assert) {

	[	[1, 'isNumber', 'isInteger', 'isNotNull', 'isDefined', 'isPresent'],
		[1.23, 'isNumber', 'isNotNull', 'isDefined', 'isPresent'],
		[true, 'isBoolean', 'isNotNull', 'isDefined', 'isPresent'],
		["foobar", 'isString', 'isNotNull', 'isDefined', 'isPresent'],
		[[1,2,3], 'isArray', 'isNotNull', 'isDefined', 'isPresent'],
		[function() {}, 'isFunction', 'isNotNull', 'isDefined', 'isPresent'],
		[null, 'isNull', 'isDefined'],
		[{}, 'isObject', 'isDefined', 'isNotNull', 'isPresent'],
		[undefined, 'isUndefined', 'isNotNull']
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