import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { TableCaption } from '../src';

test('Tests - TableCaption.js', t => {
    const wrapper = shallow(<TableCaption id="test" />);
    const element = wrapper.find('caption');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
