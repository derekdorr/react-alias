import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { ContextMenu } from '../src';

test('Tests - ContextMenu.js', t => {
    const wrapper = shallow(<ContextMenu id="test" />);
    const element = wrapper.find('menu');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
