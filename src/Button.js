/**
 * Alias for the <button> tag.  The Button should be used when performing a user
 * action such as a form submission or popping a dialog.
 * 
 * @module Button
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Button';
const STR_TAG = _toLowerCase(STR_NAME);

const Button = alias(STR_TAG, STR_NAME);

export default Button;
