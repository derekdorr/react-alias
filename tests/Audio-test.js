import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Audio } from '../src';

test('Tests - Audio.js', t => {
    const wrapper = shallow(<Audio id="test" />);
    const element = wrapper.find('audio');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
