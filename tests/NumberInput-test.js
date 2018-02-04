import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { NumberInput } from '../src';

test('Tests - NumberInput.js', t => {
    const wrapper = shallow(<NumberInput id="test" />);
    const element = wrapper.find('input');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.equal(element.prop('type'), 'number', 'The element has type number');
    t.end();
});
