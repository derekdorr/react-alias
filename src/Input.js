/**
 * Alias for the input tag. The Input element can be used to define a generic
 * field within a form for user input.
 *
 * @module Input
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Input';
const STR_TAG = _toLowerCase(STR_NAME);

const Input = alias(STR_TAG, STR_NAME);

export default Input;
