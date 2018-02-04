/**
 * Alias for the <area> tag.  The Area tag defines a clickable area within
 * an image map.  Parent should be the Map component.
 *
 * @module Area
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import alias from './alias';
import STR_AREA from './_constants/STR_AREA';
import STR_AREA_LC from './_constants/STR_AREA_LC';

const Area = alias(STR_AREA_LC, STR_AREA);

export default Area;
