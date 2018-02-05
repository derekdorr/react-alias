/**
 * The alias function generates a memoized function which renders a React
 * Pure-Functional component.
 *
 * @module alias
 * @func
 * @since 1.0.0
 * @param {string} Tag
 * @param {string} name
 * @return {func}
 */

import React from 'react';
import { memoize } from 'skald';
import _addDisplayName from './_internal/_addDisplayName';

const internal = (Tag, name) => {
    const aliased = props => (<Tag {...props} />);
    return _addDisplayName(aliased, name);
};

const alias = memoize(internal);
export default alias;
