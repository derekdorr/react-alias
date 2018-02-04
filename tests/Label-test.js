import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Label } from '../src';

test('Tests - Label.js', t => {
    const wrapper = shallow(<Label id="test" />);
    const element = wrapper.find('label');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
