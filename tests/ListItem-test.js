import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { ListItem } from '../src';

test('Tests - ListItem.js', t => {
    const wrapper = shallow(<ListItem id="test" />);
    const element = wrapper.find('li');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
