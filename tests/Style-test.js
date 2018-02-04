import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Style } from '../src';

test('Tests - Style.js', t => {
    const style = '#test { display: none; }';
    const wrapper = shallow(<Style>{style}</Style>);
    const element = wrapper.find('style');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.text(), style, 'The element sets style for test');
    t.end();
});
