/**
 * Alias for the cite tag.  The Cite tag defines the title of a work.
 *
 * @module Cite
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Cite';
const STR_TAG = _toLowerCase(STR_NAME);

const Cite = alias(STR_TAG, STR_NAME);

export default Cite;
