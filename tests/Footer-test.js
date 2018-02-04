import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Footer } from '../src';

test('Tests - Footer.js', t => {
    const wrapper = shallow(<Footer id="test" />);
    const element = wrapper.find('footer');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
