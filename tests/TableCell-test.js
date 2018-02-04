import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { TableCell } from '../src';

test('Tests - TableCell.js', t => {
    const wrapper = shallow(<TableCell id="test" />);
    const element = wrapper.find('td');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
