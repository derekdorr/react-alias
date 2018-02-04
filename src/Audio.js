/**
 * Alias for the audio tag.  The Audio tag defines playable audio content.
 *
 * @module Audio
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Audio';
const STR_TAG = _toLowerCase(STR_NAME);

const Audio = alias(STR_TAG, STR_NAME);

export default Audio;
