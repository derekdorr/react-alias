import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { TableFooter } from '../src';

test('Tests - TableFooter.js', t => {
    const wrapper = shallow(<TableFooter id="test" />);
    const element = wrapper.find('tfoot');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
