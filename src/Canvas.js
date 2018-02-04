/**
 * Alias for the canvas tag.  The Canvas tag is used to draw objects through
 * scripting.
 *
 * @module Canvas
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Canvas';
const STR_TAG = _toLowerCase(STR_NAME);

const Canvas = alias(STR_TAG, STR_NAME);

export default Canvas;
