/**
 * Alias for the textarea tag. The TextArea element defines a freetext field for
 * user input in a Form.
 *
 * @module TextArea
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import alias from './alias';
import STR_TEXT_AREA from './_constants/STR_TEXT_AREA';
import STR_TEXT_AREA_LC from './_constants/STR_TEXT_AREA_LC';

const TextArea = alias(STR_TEXT_AREA_LC, STR_TEXT_AREA);

export default TextArea;
