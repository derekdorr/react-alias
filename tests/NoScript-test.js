import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { NoScript } from '../src';

test('Tests - NoScript.js', t => {
    const wrapper = shallow(<NoScript id="test" />);
    const element = wrapper.find('noscript');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
