import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Header } from '../src';

test('Tests - Header.js', t => {
    const wrapper = shallow(<Header id="test" />);
    const element = wrapper.find('header');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
