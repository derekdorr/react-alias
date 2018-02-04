/**
 * Alias for the <noscript> tag. The NoScript tag defines content which displays
 * in a browser if scripting is not enabled.
 * 
 * @module NoScript
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'NoScript';
const STR_TAG = _toLowerCase(STR_NAME);

const NoScript = alias(STR_TAG, STR_NAME);

export default NoScript;
