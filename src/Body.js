/**
 * Alias for the body tag.  The Body component defines the wraps the visible
 * document content.
 *
 * @module Body
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Body';
const STR_TAG = _toLowerCase(STR_NAME);

const Body = alias(STR_TAG, STR_NAME);

export default Body;
