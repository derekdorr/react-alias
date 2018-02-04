import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { TimeInput } from '../src';

test('Tests - TimeInput.js', t => {
    const wrapper = shallow(<TimeInput id="test" />);
    const element = wrapper.find('input');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.equal(element.prop('type'), 'time', 'The element has type time');
    t.end();
});
