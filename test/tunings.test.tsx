/*
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Thing />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
*/

import {tuneFourth} from "../src/index";

test('tuneFourth', () => {
  expect(tuneFourth(0, 0)).toBe(0);
  expect(tuneFourth(1, 0)).toBe(1);
  expect(tuneFourth(0, 1)).toBe(5);
  expect(tuneFourth(1, 1)).toBe(6);
  expect(tuneFourth(2, 2) - tuneFourth(1, 1)).toBe(6);    // to - from
  expect(tuneFourth(0, 0) - tuneFourth(0, 1)).toBe(-5);   // to - from
});

// describe('it', () => {
//     it('renders without crashing', () => {
//         let n = tuneFourth(0, 0, 1, 1);
//     });
// });



