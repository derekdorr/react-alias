/**
 * Alias for the fieldset tag. The FieldSet is used to group related elements within
 * a form.
 *
 * @module FieldSet
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'FieldSet';
const STR_TAG = _toLowerCase(STR_NAME);

const FieldSet = alias(STR_TAG, STR_NAME);

export default FieldSet;
