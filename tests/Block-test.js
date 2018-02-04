import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Block } from '../src';

test('Tests - Block.js', t => {
    const wrapper = shallow(<Block id="test" />);
    const element = wrapper.find('div');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
