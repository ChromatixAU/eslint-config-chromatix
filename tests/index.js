/**
 * Simple tests for eslint-config-chromatix.
 * Inspired by tests on eslint-config-wordpress.
 *
 * @author Tim Malone <tim.malone@chromatix.com.au>.
 */

'use strict';

const isPlainObj = require( 'is-plain-obj' );

test( 'index.js', () => {

  const config = require( '../index.js' );

  expect( isPlainObj( config ) ).toBe( true );
  expect( Array.isArray( config.extends ) ).toBe( true );
  expect( isPlainObj( config.env ) ).toBe( true );
  expect( isPlainObj( config.rules ) ).toBe( true );

});
