import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Meta } from '../src';

test('Tests - Meta.js', t => {
    const wrapper = shallow(<Meta name="test" />);
    const element = wrapper.find('meta');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('name'), 'test', 'The element has id test');
    t.end();
});
