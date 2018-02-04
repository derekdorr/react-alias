import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Picture } from '../src';

test('Tests - Picture.js', t => {
    const wrapper = shallow(<Picture id="test" />);
    const element = wrapper.find('picture');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
