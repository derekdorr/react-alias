import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { FileInput } from '../src';

test('Tests - FileInput.js', t => {
    const wrapper = shallow(<FileInput id="test" />);
    const element = wrapper.find('input');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.equal(element.prop('type'), 'file', 'The element has type file');
    t.end();
});
