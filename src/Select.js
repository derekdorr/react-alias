/**
 * Alias for the select tag. The Select element defines a dropdown input for a form.
 *
 * @module Select
 * @func
 * @since 1.0.0
 * @param {Object} props
 */


import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Select';
const STR_TAG = _toLowerCase(STR_NAME);

const Select = alias(STR_TAG, STR_NAME);

export default Select;
