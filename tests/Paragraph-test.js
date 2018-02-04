import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Paragraph } from '../src';

test('Tests - Paragraph.js', t => {
    const wrapper = shallow(<Paragraph id="test" />);
    const element = wrapper.find('p');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
