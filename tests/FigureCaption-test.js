import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { FigureCaption } from '../src';

test('Tests - FigureCaption.js', t => {
    const wrapper = shallow(<FigureCaption id="test" />);
    const element = wrapper.find('figcaption');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
