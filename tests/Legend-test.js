import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Legend } from '../src';

test('Tests - Legend.js', t => {
    const wrapper = shallow(<Legend id="test" />);
    const element = wrapper.find('legend');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
