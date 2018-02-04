import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Canvas } from '../src';

test('Tests - Canvas.js', t => {
    const wrapper = shallow(<Canvas id="test" />);
    const element = wrapper.find('canvas');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
