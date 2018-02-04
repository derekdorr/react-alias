import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { ButtonInput } from '../src';

test('Tests - ButtonInput.js', t => {
    const wrapper = shallow(<ButtonInput id="test" />);
    const element = wrapper.find('input');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.equal(element.prop('type'), 'button', 'The element has type button');
    t.end();
});
