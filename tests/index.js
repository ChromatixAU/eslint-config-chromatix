/**
 * Simple tests for eslint-config-chromatix.
 * Inspired by tests on eslint-config-wordpress.
 *
 * @author Tim Malone <tim.malone@chromatix.com.au>.
 */
const { isPlainObject } = require( 'is-plain-object' );
const config = require( '../index.js' );

const ONE_ENTRY = 1;

test( 'Config exists and exports an object', () => {
  expect( isPlainObject( config ) ).toBe( true );
});

test( 'Config extends at least one other config', () => {
  expect( Array.isArray( config.extends ) ).toBe( true );
  expect( config.extends.length ).toBeGreaterThanOrEqual( ONE_ENTRY );
});

test( 'Config sets one or more environments it can run in', () => {
  expect( isPlainObject( config.env ) ).toBe( true );
  expect( config.extends.length ).toBeGreaterThanOrEqual( ONE_ENTRY );
});

test( 'Config sets one or more rules', () => {
  expect( isPlainObject( config.rules ) ).toBe( true );
  expect( config.extends.length ).toBeGreaterThanOrEqual( ONE_ENTRY );
});
