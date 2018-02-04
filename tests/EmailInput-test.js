import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { EmailInput } from '../src';

test('Tests - EmailInput.js', t => {
    const wrapper = shallow(<EmailInput id="test" />);
    const element = wrapper.find('input');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.equal(element.prop('type'), 'email', 'The element has type email');
    t.end();
});
