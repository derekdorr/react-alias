/**
 * Alias for the <strong> tag. The Strong element defines text which should stand
 * out from surrounding text.
 *
 * @module Strong
 * @func
 * @since 1.0.0
 * @param {Object} props
 */


import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Strong';
const STR_TAG = _toLowerCase(STR_NAME);

const Strong = alias(STR_TAG, STR_NAME);

export default Strong;
