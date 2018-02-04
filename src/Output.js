/**
 * Alias for the output tag. The Output element defines the result of a calculation.
 *
 * @module Output
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Output';
const STR_TAG = _toLowerCase(STR_NAME);

const Output = alias(STR_TAG, STR_NAME);

export default Output;
