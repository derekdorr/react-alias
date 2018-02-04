import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Mark } from '../src';

test('Tests - Mark.js', t => {
    const wrapper = shallow(<Mark id="test" />);
    const element = wrapper.find('mark');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
