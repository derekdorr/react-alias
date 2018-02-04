import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Address } from '../src';

test('Tests - Address.js', t => {
    const wrapper = shallow(<Address id="test" />);
    const element = wrapper.find('address');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
