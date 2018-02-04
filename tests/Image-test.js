import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Image } from '../src';

test('Tests - Image.js', t => {
    const wrapper = shallow(<Image id="test" />);
    const element = wrapper.find('img');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
