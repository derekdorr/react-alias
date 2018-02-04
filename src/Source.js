/**
 * Alias for the <source> tag. The Source element defines a source for a media element
 * such as Audio, video, or Picture.
 * 
 * @module Source
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Source';
const STR_TAG = _toLowerCase(STR_NAME);

const Source = alias(STR_TAG, STR_NAME);

export default Source;
