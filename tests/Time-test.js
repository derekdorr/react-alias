import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Time } from '../src';

test('Tests - Time.js', t => {
    const wrapper = shallow(<Time id="test" />);
    const element = wrapper.find('time');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
