import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Aside } from '../src';

test('Tests - Aside.js', t => {
    const wrapper = shallow(<Aside id="test" />);
    const element = wrapper.find('aside');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
