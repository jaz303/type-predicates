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

Use this to check for any non-null object, including arrays or wrapped primitives.

`(typeof thing === 'object') && (thing !== null)`

#### `isPlainObject(thing)`

Matches any non-null objects excluding arrays.

`isObject(thing) && !Array.isArray(thing)`

#### `isPlainObjectStrict(thing)`

As `isPlainObject(thing)`, but also excludes wrapped primitives.

#### `isDefined(thing)`

#### `isUndefined(thing)`

#### `exists(thing)`

`isNotNull(thing) && isDefined(thing)`
