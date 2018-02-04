import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { CheckBox } from '../src';

test('Tests - CheckBox.js', t => {
    const wrapper = shallow(<CheckBox id="test" />);
    const element = wrapper.find('input');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.equal(element.prop('type'), 'checkbox', 'The element has type checkbox');
    t.end();
});
