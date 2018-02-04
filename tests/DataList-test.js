import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { DataList } from '../src';

test('Tests - DataList.js', t => {
    const wrapper = shallow(<DataList id="test" />);
    const element = wrapper.find('datalist');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
