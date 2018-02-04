import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { MonthInput } from '../src';

test('Tests - MonthInput.js', t => {
    const wrapper = shallow(<MonthInput id="test" />);
    const element = wrapper.find('input');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.equal(element.prop('type'), 'month', 'The element has type month');
    t.end();
});
