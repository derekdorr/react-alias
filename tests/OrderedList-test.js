import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { OrderedList } from '../src';

test('Tests - OrderedList.js', t => {
    const wrapper = shallow(<OrderedList id="test" />);
    const element = wrapper.find('ol');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
