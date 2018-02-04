import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Article } from '../src';

test('Tests - Article.js', t => {
    const wrapper = shallow(<Article id="test" />);
    const element = wrapper.find('article');
    t.equal(element.length, 1, 'An element exists');
    t.equal(element.prop('id'), 'test', 'The element has id test');
    t.end();
});
