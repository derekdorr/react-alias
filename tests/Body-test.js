import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Body } from '../src';

test('Tests - Body.js', t => {
    const wrapper = shallow(<Body id="test" />);
    const element = wrapper.find('body');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
