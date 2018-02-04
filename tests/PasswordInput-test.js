import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { PasswordInput } from '../src';

test('Tests - PasswordInput.js', t => {
    const wrapper = shallow(<PasswordInput id="test" />);
    const element = wrapper.find('input');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.equal(element.prop('type'), 'password', 'The element has type password');
    t.end();
});
