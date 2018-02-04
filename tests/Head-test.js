import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Head } from '../src';

test('Tests - Head.js', t => {
    const wrapper = shallow(<Head />);
    const element = wrapper.find('head');
    t.equal(element.length, 1, 'An element exists');
    t.end();
});
