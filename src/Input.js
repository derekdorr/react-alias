/**
 * Alias for the input tag. The Input element can be used to define a generic
 * field within a form for user input.
 *
 * @module Input
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import alias from './alias';
import STR_INPUT from './_constants/STR_INPUT';
import STR_INPUT_LC from './_constants/STR_INPUT_LC';

const Input = alias(STR_INPUT_LC, STR_INPUT);

export default Input;
