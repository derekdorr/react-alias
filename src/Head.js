/**
 * Alias for the head tag. The Head element should be used as a container for
 * document-level meta data and to load linked resources.
 *
 * @module Head
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Head';
const STR_TAG = _toLowerCase(STR_NAME);

const Head = alias(STR_TAG, STR_NAME);

export default Head;
