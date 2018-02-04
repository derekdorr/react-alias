import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { UrlInput } from '../src';

test('Tests - UrlInput.js', t => {
    const wrapper = shallow(<UrlInput id="test" />);
    const element = wrapper.find('input');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.equal(element.prop('type'), 'url', 'The element has type url');
    t.end();
});
