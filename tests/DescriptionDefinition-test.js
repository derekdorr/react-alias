import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { DescriptionDefinition } from '../src';

test('Tests - Picture.js', t => {
    const wrapper = shallow(<DescriptionDefinition id="test" />);
    const element = wrapper.find('dd');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
