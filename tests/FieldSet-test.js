import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { FieldSet } from '../src';

test('Tests - FieldSet.js', t => {
    const wrapper = shallow(<FieldSet id="test" />);
    const element = wrapper.find('fieldset');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
