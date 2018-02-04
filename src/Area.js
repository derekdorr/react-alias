/**
 * Alias for the <area> tag.  The Area tag defines a clickable area within
 * an image map.  Parent should be the Map component.
 * 
 * @module Area
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Area';
const STR_TAG = _toLowerCase(STR_NAME);

const Area = alias(STR_TAG, STR_NAME);

export default Area;
