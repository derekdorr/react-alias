/**
 * Alias for the <details> tag.  The Details tag provides additional details about
 * a context that a user can show or hide on demand.
 *
 * @module DescriptionDefinition
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Details';
const STR_TAG = _toLowerCase(STR_NAME);

const Details = alias(STR_TAG, STR_NAME);

export default Details;
