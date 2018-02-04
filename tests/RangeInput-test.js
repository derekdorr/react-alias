import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { RangeInput } from '../src';

test('Tests - RangeInput.js', t => {
    const wrapper = shallow(<RangeInput id="test" />);
    const element = wrapper.find('input');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.equal(element.prop('type'), 'range', 'The element has type reset');
    t.end();
});
