import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Summary } from '../src';

test('Tests - Summary.js', t => {
    const wrapper = shallow(<Summary id="test" />);
    const element = wrapper.find('summary');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
