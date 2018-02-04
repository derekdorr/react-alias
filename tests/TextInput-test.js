import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { TextInput } from '../src';

test('Tests - TextInput.js', t => {
    const wrapper = shallow(<TextInput id="test" />);
    const element = wrapper.find('input');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.equal(element.prop('type'), 'text', 'The element has type text');
    t.end();
});
