/**
 * Alias for the <code> tag.  The Code tag defines a piece of computer code.
 * 
 * @module Code
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Code';
const STR_TAG = _toLowerCase(STR_NAME);

const Code = alias(STR_TAG, STR_NAME);

export default Code;
