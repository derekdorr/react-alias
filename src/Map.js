/**
 * Alias for the <map> tag. The Map element defines a map of Areas that allows
 * regions of an image to be clickable.
 * 
 * @module Map
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Map';
const STR_TAG = _toLowerCase(STR_NAME);

const Map = alias(STR_TAG, STR_NAME);

export default Map;
