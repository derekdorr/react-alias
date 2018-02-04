/**
 * Alias for the <mark> tag. The Mark element defines text which should be
 * highlighted within the context of surrounding text.
 *
 * @module Mark
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Mark';
const STR_TAG = _toLowerCase(STR_NAME);

const Mark = alias(STR_TAG, STR_NAME);

export default Mark;
