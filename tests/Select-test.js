import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Select } from '../src';

test('Tests - Select.js', t => {
    const wrapper = shallow(<Select id="test" />);
    const element = wrapper.find('select');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
