import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Title } from '../src';

test('Tests - Title.js', t => {
    const wrapper = shallow(<Title>Test</Title>);
    const element = wrapper.find('title');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.text(), 'Test', 'The element has text test');
    t.end();
});
