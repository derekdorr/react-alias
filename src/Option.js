/**
 * Alias for the <option> tag. The Option element defines a user-selectable value
 * for a Select.
 *
 * @module Option
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Option';
const STR_TAG = _toLowerCase(STR_NAME);

const Option = alias(STR_TAG, STR_NAME);

export default Option;
