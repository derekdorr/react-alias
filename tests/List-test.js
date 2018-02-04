import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { List } from '../src';

test('Tests - List.js', t => {
    const wrapper = shallow(<List id="test" />);
    const element = wrapper.find('ul');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
