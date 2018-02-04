import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { ContextMenuItem } from '../src';

test('Tests - ContextMenuItem.js', t => {
    const wrapper = shallow(<ContextMenuItem id="test" />);
    const element = wrapper.find('menuitem');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
