import { test } from 'node:test';
import assert from 'node:assert/strict';
import stringToBoolean from '../esm/StringToBoolean.mjs';

test('boolean passthrough', () => {
	assert.equal(stringToBoolean(true), true);
	assert.equal(stringToBoolean(false), false);
});

test('falsy strings', () => {
	assert.equal(stringToBoolean('0'), false);
	assert.equal(stringToBoolean('false'), false);
	assert.equal(stringToBoolean('FALSE'), false);
	assert.equal(stringToBoolean('False'), false);
	assert.equal(stringToBoolean('off'), false);
	assert.equal(stringToBoolean('OFF'), false);
	assert.equal(stringToBoolean(''), false);
});

test('truthy strings', () => {
	assert.equal(stringToBoolean('1'), true);
	assert.equal(stringToBoolean('true'), true);
	assert.equal(stringToBoolean('TRUE'), true);
	assert.equal(stringToBoolean('yes'), true);
	assert.equal(stringToBoolean('on'), true);
	assert.equal(stringToBoolean('anything'), true);
});

test('null and undefined', () => {
	assert.equal(stringToBoolean(null), false);
	assert.equal(stringToBoolean(undefined), false);
});
