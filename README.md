# type-predicates

Functions for checking types of values.

## API

Most of these should be self-explanatory:

#### `isString(thing)`

#### `isNumber(thing)`

#### `isInteger(thing)`

`isNumber(thing) && ((thing | 0) === (0 + thing))`

#### `isBoolean(thing)`

#### `isArray(thing)`

#### `isFunction(thing)`

#### `isNull(thing)`

#### `isNotNull(thing)`

#### `isObject(thing)`

`(typeof thing === 'object') && (thing !== null) && (!Array.isArray(thing))`

__NOTE:__ not happy with this one, see below.

#### `isDefined(thing)`

#### `isUndefined(thing)`

#### `exists(thing)`

`isNotNull(thing) && isDefined(thing)`

## TODO

I'm not happy with `isObject()` - it currently detects `typeof Object` modulo `Array` instances and `null`; object-wrapped primitives return `true`. Current idea is to split into two or three; names are still debatable:

  * isObject: `typeof thing === 'object'`
  * ???: `not null && (typeof thing === 'object')`
  * isPureObject: `isObject(thing) && not null && not wrapped primitive && not array`
