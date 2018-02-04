/**
 * Alias for the input type="button" tag.  Should be used when adding a button
 * to a form.  Though, Button will perform the same action when included in a
 * Form by default.
 *
 * @module ButtonInput
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import STR_DISPLAY_NAME from './_constants/STR_DISPLAY_NAME';
import STR_BUTTON_LC from './_constants/STR_BUTTON_LC';
import STR_BUTTON_INPUT from './_constants/STR_BUTTON_INPUT';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType(STR_BUTTON_LC);

const ButtonInput = compose(Input, mergeProps);
ButtonInput[STR_DISPLAY_NAME] = STR_BUTTON_INPUT;

export default ButtonInput;
