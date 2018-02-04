import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { HorizontalRule } from '../src';

test('Tests - HorizontalRule.js', t => {
    const wrapper = shallow(<HorizontalRule id="test" />);
    const element = wrapper.find('hr');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
