/**
 * Alias for the <link> tag. The Link element defines a relationship between a
 * docuument and an external resource.
 *
 * @module Link
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Link';
const STR_TAG = _toLowerCase(STR_NAME);

const Link = alias(STR_TAG, STR_NAME);

export default Link;
