/**
 * Alias for the label tag. The Label element defines information relevant to
 * an Input, Select, or TextArea.
 *
 * @module Label
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Label';
const STR_TAG = _toLowerCase(STR_NAME);

const Label = alias(STR_TAG, STR_NAME);

export default Label;
