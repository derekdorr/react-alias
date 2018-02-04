import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Navigation } from '../src';

test('Tests - Navigation.js', t => {
    const wrapper = shallow(<Navigation id="test" />);
    const element = wrapper.find('nav');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
