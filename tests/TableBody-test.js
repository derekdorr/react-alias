import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { TableBody } from '../src';

test('Tests - TableBody.js', t => {
    const wrapper = shallow(<TableBody id="test" />);
    const element = wrapper.find('tbody');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
