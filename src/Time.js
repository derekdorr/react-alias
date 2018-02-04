/**
 * Alias for the time tag. The Time element defines human-readable time-related
 * information within the context of its parent.
 *
 * @module Time
 * @func
 * @since 1.0.0
 * @param {Object} props
 */


import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Time';
const STR_TAG = _toLowerCase(STR_NAME);

const Time = alias(STR_TAG, STR_NAME);

export default Time;
