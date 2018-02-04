/**
 * Alias for the <html> tag. The Html element is a wrapper for an HTML document.
 *
 * @module Html
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Html';
const STR_TAG = _toLowerCase(STR_NAME);

const Html = alias(STR_TAG, STR_NAME);

export default Html;
