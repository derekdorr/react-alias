import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Button } from '../src';

test('Tests - Button.js', t => {
    const wrapper = shallow(<Button id="test" />);
    const element = wrapper.find('button');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
