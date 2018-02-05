/**
 * Alias for the time tag. The Time element defines human-readable time-related
 * information within the context of its parent.
 *
 * @module Time
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import alias from './alias';
import STR_TIME from './_constants/STR_TIME';
import STR_TIME_LC from './_constants/STR_TIME_LC';

const Time = alias(STR_TIME_LC, STR_TIME);

export default Time;
