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
import STR_DISPLAY_NAME from './_constants/STR_DISPLAY_NAME';

const internal = (Tag, name) => {
    const aliased = props => (<Tag {...props} />);
    aliased[STR_DISPLAY_NAME] = name;
    return aliased;
};

const alias = memoize(internal);
export default alias;
