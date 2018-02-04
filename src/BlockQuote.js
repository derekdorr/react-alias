/**
 * Alias for the blockquote tag.  The BlockQuote tag defines content
 * which is quoted from another source.
 *
 * @module BlockQuote
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'BlockQuote';
const STR_TAG = _toLowerCase(STR_NAME);

const BlockQuote = alias(STR_TAG, STR_NAME);

export default BlockQuote;
