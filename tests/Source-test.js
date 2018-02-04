import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Source } from '../src';

test('Tests - Source.js', t => {
    const wrapper = shallow(<Source id="test" />);
    const element = wrapper.find('source');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
