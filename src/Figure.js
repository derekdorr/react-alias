/**
 * Alias for the <figure> tag. The Figure element should contain self-contained
 * content which is relevant to the current document, but which could be removed
 * without impacting the flow of the current document.
 *
 * @module Figure
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Figure';
const STR_TAG = _toLowerCase(STR_NAME);

const Figure = alias(STR_TAG, STR_NAME);

export default Figure;
