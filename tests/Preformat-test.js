import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Preformat } from '../src';

test('Tests - Preformat.js', t => {
    const wrapper = shallow(<Preformat id="test" />);
    const element = wrapper.find('pre');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
