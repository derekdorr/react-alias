import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Output } from '../src';

test('Tests - Output.js', t => {
    const wrapper = shallow(<Output id="test" />);
    const element = wrapper.find('output');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
