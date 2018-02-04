/**
 * Alias for the input type="color" tag.  Should be used when adding a color field
 * to a form.
 *
 * @module ColorInput
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import STR_DISPLAY_NAME from './_constants/STR_DISPLAY_NAME';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType('color');

const ColorInput = compose(Input, mergeProps);
ColorInput[STR_DISPLAY_NAME] = 'ColorInput';

export default ColorInput;
