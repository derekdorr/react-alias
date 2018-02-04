import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { SubmitInput } from '../src';

test('Tests - SubmitInput.js', t => {
    const wrapper = shallow(<SubmitInput id="test" />);
    const element = wrapper.find('input');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.equal(element.prop('type'), 'submit', 'The element has type submit');
    t.end();
});
