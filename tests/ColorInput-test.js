import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { ColorInput } from '../src';

test('Tests - ColorInput.js', t => {
    const wrapper = shallow(<ColorInput id="test" />);
    const element = wrapper.find('input');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.equal(element.prop('type'), 'color', 'The element has type color');
    t.end();
});
