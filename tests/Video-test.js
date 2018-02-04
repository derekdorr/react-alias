import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Video } from '../src';

test('Tests - Video.js', t => {
    const wrapper = shallow(<Video id="test" />);
    const element = wrapper.find('video');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
