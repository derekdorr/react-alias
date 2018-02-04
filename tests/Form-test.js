import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Form } from '../src';

test('Tests - Form.js', t => {
    const wrapper = shallow(<Form id="test" />);
    const element = wrapper.find('form');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
