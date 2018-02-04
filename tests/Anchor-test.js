import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import { Anchor } from '../src';

test('Tests - Anchor.js', t => {
    const wrapper = shallow(<Anchor
        id="test"
        href="/"
    >
            Example
    </Anchor>);
    const anchor = wrapper.find('a');
    t.equal(anchor.length, 1, 'An a exists');
    t.equal(anchor.prop('id'), 'test', 'The anchor has id test');
    t.equal(anchor.prop('href'), '/', 'The anchor has href of /');
    t.equal(anchor.text(), 'Example', 'Anchor has text Example');
    t.end();
});
