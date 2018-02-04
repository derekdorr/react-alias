import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { BlockQuote } from '../src';

test('Tests - BlockQuote.js', t => {
    const wrapper = shallow(<BlockQuote id="test" />);
    const element = wrapper.find('blockquote');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
