/**
 * Alias for the embed tag. The Embed tag defines a container for an external
 * application or interactive content contained within a document.
 *
 * @module Embed
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Embed';
const STR_TAG = _toLowerCase(STR_NAME);

const Embed = alias(STR_TAG, STR_NAME);

export default Embed;
