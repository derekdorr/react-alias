import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { TableHeaderCell } from '../src';

test('Tests - TableHeaderCell.js', t => {
    const wrapper = shallow(<TableHeaderCell id="test" />);
    const element = wrapper.find('th');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
