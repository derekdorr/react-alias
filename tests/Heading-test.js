import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Heading } from '../src';

test('Tests - Heading.js', t => {
    const h1 = shallow(<Heading level={1} id="test" />);
    const h1e = h1.find('h1');
    t.equal(h1e.length, 1, 'An element exists');
    t.equal(h1e.prop('id'), 'test', 'The element has id test');
    const h2 = shallow(<Heading level={2} id="test" />);
    const h2e = h2.find('h2');
    t.equal(h2e.length, 1, 'An element exists');
    t.equal(h2e.prop('id'), 'test', 'The element has id test');
    const h3 = shallow(<Heading level={3} id="test" />);
    const h3e = h3.find('h3');
    t.equal(h3e.length, 1, 'An element exists');
    t.equal(h3e.prop('id'), 'test', 'The element has id test');
    t.end();
});
