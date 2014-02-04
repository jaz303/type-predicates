# type-predicates

Functions for checking types of values.

## API

Most of these should be self-explanatory:

#### `isString(thing)`

#### `isNumber(thing)`

#### `isInteger(thing)`

`isNumber(thing) && ((thing | 0) === thing)`

#### `isBoolean(thing)`

#### `isArray(thing)`

#### `isFunction(thing)`

#### `isNull(thing)`

#### `isNotNull(thing)`

#### `isObject(thing)`

#### `isDefined(thing)`

#### `isUndefined(thing)`

#### `exists(thing)`

`isNotNull(thing) && isDefined(thing)`

## TODO

Still to handle object instances of primitives e.g. `new String('whyowhyowhy')`.