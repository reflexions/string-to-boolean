'use strict'

/**
 * Converts a string to a boolean, treating '0', 'false', 'FALSE', 'off' and falsy values like '' to false, the rest to true.
 * @param {string|boolean} value
 */
const stringToBoolean = (value) => typeof value === 'boolean'
	? value // param is already boolean
	: typeof value === 'string'
		? [ '0', 'false', 'off' ].includes(value.toLowerCase())
			? false
			: Boolean(value) // returns false for ''; true for non-empty string
		: Boolean(value); // returns false for null or undefined, true for objects

module.exports = stringToBoolean;
