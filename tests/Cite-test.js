import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Cite } from '../src';

test('Tests - Cite.js', t => {
    const wrapper = shallow(<Cite id="test" />);
    const element = wrapper.find('cite');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
