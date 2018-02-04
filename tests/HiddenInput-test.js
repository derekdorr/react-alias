import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { HiddenInput } from '../src';

test('Tests - HiddenInput.js', t => {
    const wrapper = shallow(<HiddenInput id="test" />);
    const element = wrapper.find('input');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.equal(element.prop('type'), 'hidden', 'The element has type hidden');
    t.end();
});
