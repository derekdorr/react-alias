import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Details } from '../src';

test('Tests - Details.js', t => {
    const wrapper = shallow(<Details id="test" />);
    const element = wrapper.find('details');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
