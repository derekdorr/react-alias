import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Option } from '../src';

test('Tests - Option.js', t => {
    const wrapper = shallow(<Option value="test" />);
    const element = wrapper.find('option');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('value'), 'test', 'The element has id test');
    t.end();
});
