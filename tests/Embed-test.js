import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Embed } from '../src';

test('Tests - Embed.js', t => {
    const wrapper = shallow(<Embed id="test" />);
    const element = wrapper.find('embed');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
