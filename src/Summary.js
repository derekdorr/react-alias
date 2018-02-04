/**
 * Alias for the <summary> tag. The Summary element defines a visible heading for
 * a Details element.
 *
 * @module Summary
 * @func
 * @since 1.0.0
 * @param {Object} props
 */


import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Summary';
const STR_TAG = _toLowerCase(STR_NAME);

const Summary = alias(STR_TAG, STR_NAME);

export default Summary;
