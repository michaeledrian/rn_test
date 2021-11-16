/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {stringToDecimal, stringToNumber} from '../src/utils/GlobalFunction';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

// convert string into string with decimal only
test('String to decimal', () => {
  expect(stringToDecimal('ajwndwadn12.adljnsoa5')).toEqual('12.5');
});

// convert string into string with number only
test('String to number', () => {
  expect(stringToNumber('ajwndwadn12.adljnsoa5')).toEqual('125');
});
