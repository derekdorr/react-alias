/**
 * Alias for the <aside> tag.  The Aside tag defines content which is an aside
 * from the content it is placed within.  The Aside tag should be relevant to
 * the surrounding content.
 * 
 * @module Aside
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Aside';
const STR_TAG = _toLowerCase(STR_NAME);

const Aside = alias(STR_TAG, STR_NAME);

export default Aside;
