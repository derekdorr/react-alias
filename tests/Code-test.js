import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Code } from '../src';

test('Tests - Code.js', t => {
    const wrapper = shallow(<Code id="test" />);
    const element = wrapper.find('code');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
