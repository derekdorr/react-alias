import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { DateInput } from '../src';

test('Tests - DateInput.js', t => {
    const wrapper = shallow(<DateInput id="test" />);
    const element = wrapper.find('input');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.equal(element.prop('type'), 'date', 'The element has type date');
    t.end();
});
