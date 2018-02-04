import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { IFrame } from '../src';

test('Tests - IFrame.js', t => {
    const wrapper = shallow(<IFrame id="test" />);
    const element = wrapper.find('iframe');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
