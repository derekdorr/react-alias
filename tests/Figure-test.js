import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Figure } from '../src';

test('Tests - Figure.js', t => {
    const wrapper = shallow(<Figure id="test" />);
    const element = wrapper.find('figure');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
