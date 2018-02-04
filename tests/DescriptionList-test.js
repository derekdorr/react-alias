import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { DescriptionList } from '../src';

test('Tests - DescriptionList.js', t => {
    const wrapper = shallow(<DescriptionList id="test" />);
    const element = wrapper.find('dl');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
