import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Html } from '../src';

test('Tests - Html.js', t => {
    const wrapper = shallow(<Html lang="en" />);
    const element = wrapper.find('html');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('lang'), 'en', 'The element has id test');
    t.end();
});
