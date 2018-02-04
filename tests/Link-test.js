import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Link } from '../src';

test('Tests - Link.js', t => {
    const wrapper = shallow(<Link href="test" />);
    const element = wrapper.find('picture');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('href'), 'test', 'The element has id test');
    t.end();
});
