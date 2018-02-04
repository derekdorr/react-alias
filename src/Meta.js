/**
 * Alias for the <meta> tag. The Meta element defines metadata about a document.
 * 
 * @module Meta
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Meta';
const STR_TAG = _toLowerCase(STR_NAME);

const Meta = alias(STR_TAG, STR_NAME);

export default Meta;
