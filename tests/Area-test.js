import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Area } from '../src';

test('Tests - Area.js', t => {
    const wrapper = shallow(<Area id="test" />);
    const element = wrapper.find('area');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
