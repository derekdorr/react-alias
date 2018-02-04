import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Main } from '../src';

test('Tests - Main.js', t => {
    const wrapper = shallow(<Main id="test" />);
    const element = wrapper.find('main');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
