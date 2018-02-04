/**
 * Alias for the <main> tag. The Main element provides a semantic container for
 * the main content within a document. For backwards compatability for IE11 and previous,
 * a role="main" should also be added.
 *
 * @module Main
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Main';
const STR_TAG = _toLowerCase(STR_NAME);

const Main = alias(STR_TAG, STR_NAME);

export default Main;
