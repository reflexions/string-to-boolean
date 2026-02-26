# @reflexions/string-to-boolean

Converts strings to booleans, treating `'0'`, `'false'`, and `'off'` as false. Useful for environment variables and form inputs.

## Install

```sh
npm install @reflexions/string-to-boolean
```

## Usage

```js
import stringToBoolean from '@reflexions/string-to-boolean';

stringToBoolean('true')   // true
stringToBoolean('1')      // true
stringToBoolean('false')  // false
stringToBoolean('0')      // false
stringToBoolean('')       // false
```

## Behavior

| Input | Output | Notes |
|---|---|---|
| `true` / `false` | `true` / `false` | Booleans pass through unchanged |
| `'true'`, `'TRUE'`, `'True'` | `true` | Case-insensitive |
| `'false'`, `'FALSE'`, `'False'` | `false` | Case-insensitive |
| `'1'`, `'yes'`, `'on'`, `'anything'` | `true` | Any non-empty, non-falsy string |
| `'0'` | `false` | |
| `'off'`, `'OFF'` | `false` | Case-insensitive |
| `''` | `false` | Empty string |
| `null`, `undefined` | `false` | |
