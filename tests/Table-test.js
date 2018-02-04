import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Table } from '../src';

test('Tests - Table.js', t => {
    const wrapper = shallow(<Table id="test" />);
    const element = wrapper.find('table');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
