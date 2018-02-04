/**
 * Alias for the <legend> tag. A Legend element provides a caption for a FieldSet.
 * 
 * @module Legend
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Legend';
const STR_TAG = _toLowerCase(STR_NAME);

const Legend = alias(STR_TAG, STR_NAME);

export default Legend;
