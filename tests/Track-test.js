import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Track } from '../src';

test('Tests - Track.js', t => {
    const wrapper = shallow(<Track id="test" />);
    const element = wrapper.find('track');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
