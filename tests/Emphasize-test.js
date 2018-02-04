import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Emphasize } from '../src';

test('Tests - Emphasize.js', t => {
    const wrapper = shallow(<Emphasize id="test" />);
    const element = wrapper.find('em');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
