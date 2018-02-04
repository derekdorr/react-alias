import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Script } from '../src';

test('Tests - Script.js', t => {
    const wrapper = shallow(<Script src="test" />);
    const element = wrapper.find('script');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('src'), 'test', 'The element has id test');
    t.end();
});
