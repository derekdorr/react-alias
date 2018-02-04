import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Map } from '../src';

test('Tests - Map.js', t => {
    const wrapper = shallow(<Map id="test" />);
    const element = wrapper.find('map');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
