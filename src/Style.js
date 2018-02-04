/**
 * Alias for the style tag. The Style element defines CSS styles for a document.
 *
 * @module Style
 * @func
 * @since 1.0.0
 * @param {Object} props
 */


import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Style';
const STR_TAG = _toLowerCase(STR_NAME);

const Style = alias(STR_TAG, STR_NAME);

export default Style;
