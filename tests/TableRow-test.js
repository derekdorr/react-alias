import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { TableRow } from '../src';

test('Tests - TableRow.js', t => {
    const wrapper = shallow(<TableRow id="test" />);
    const element = wrapper.find('tr');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
