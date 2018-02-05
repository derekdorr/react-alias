/**
 * Alias for the head tag. The Head element should be used as a container for
 * document-level meta data and to load linked resources.
 *
 * @module Head
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import alias from './alias';
import STR_HEAD from './_constants/STR_HEAD';
import STR_HEAD_LC from './_constants/STR_HEAD_LC';

const Head = alias(STR_HEAD_LC, STR_HEAD);

export default Head;
