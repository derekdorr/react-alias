import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { TextArea } from '../src';

test('Tests - TextArea.js', t => {
    const wrapper = shallow(<TextArea id="test" />);
    const element = wrapper.find('textarea');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
