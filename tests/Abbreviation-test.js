import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Abbreviation } from '../src';

test('Tests - Abbreviation.js', t => {
    const wrapper = shallow(<Abbreviation id="test" />);
    const element = wrapper.find('abbr');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
