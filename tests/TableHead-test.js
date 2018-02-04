import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { TableHead } from '../src';

test('Tests - TableHead.js', t => {
    const wrapper = shallow(<TableHead id="test" />);
    const element = wrapper.find('thead');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
