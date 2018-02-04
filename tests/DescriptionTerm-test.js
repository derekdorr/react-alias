import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { DescriptionTerm } from '../src';

test('Tests - DescriptionTerm.js', t => {
    const wrapper = shallow(<DescriptionTerm id="test" />);
    const element = wrapper.find('dt');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
