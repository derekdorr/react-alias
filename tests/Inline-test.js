import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Inline } from '../src';

test('Tests - Inline.js', t => {
    const wrapper = shallow(<Inline id="test" />);
    const element = wrapper.find('span');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
