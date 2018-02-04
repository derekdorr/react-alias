import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { LineBreak } from '../src';

test('Tests - LineBreak.js', t => {
    const wrapper = shallow(<LineBreak id="test" />);
    const element = wrapper.find('br');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
