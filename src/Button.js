/**
 * Alias for the button tag.  The Button should be used when performing a user
 * action such as a form submission or popping a dialog.
 *
 * @module Button
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import alias from './alias';
import STR_BUTTON from './_constants/STR_BUTTON';
import STR_BUTTON_LC from './_constants/STR_BUTTON_LC';

const Button = alias(STR_BUTTON_LC, STR_BUTTON);

export default Button;
