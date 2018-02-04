import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { RadioInput } from '../src';

test('Tests - RadioInput.js', t => {
    const wrapper = shallow(<RadioInput id="test" />);
    const element = wrapper.find('input');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.equal(element.prop('type'), 'radio', 'The element has type reset');
    t.end();
});
