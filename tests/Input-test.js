import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Input } from '../src';

test('Tests - Input.js', t => {
    const wrapper = shallow(<Input id="test" />);
    const element = wrapper.find('input');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
