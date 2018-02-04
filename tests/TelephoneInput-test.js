import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { TelephoneInput } from '../src';

test('Tests - TelephoneInput.js', t => {
    const wrapper = shallow(<TelephoneInput id="test" />);
    const element = wrapper.find('input');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.equal(element.prop('type'), 'tel', 'The element has type tel');
    t.end();
});
