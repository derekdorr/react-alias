import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Strong } from '../src';

test('Tests - Strong.js', t => {
    const wrapper = shallow(<Strong id="test" />);
    const element = wrapper.find('strong');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
