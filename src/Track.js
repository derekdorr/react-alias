/**
 * Alias for the <track> tag. The Track element defines tracks for media elements.
 *
 * @module Track
 * @func
 * @since 1.0.0
 * @param {Object} props
 */


import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Track';
const STR_TAG = _toLowerCase(STR_NAME);

const Track = alias(STR_TAG, STR_NAME);

export default Track;
