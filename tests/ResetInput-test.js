import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { ResetInput } from '../src';

test('Tests - ResetInput.js', t => {
    const wrapper = shallow(<ResetInput id="test" />);
    const element = wrapper.find('input');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.equal(element.prop('type'), 'reset', 'The element has type reset');
    t.end();
});
