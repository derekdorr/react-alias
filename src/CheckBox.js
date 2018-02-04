/**
 * Alias for the input type="checkbox" tag.  Should be used when adding a checkbox
 * to a form.
 *
 * @module CheckBox
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import STR_DISPLAY_NAME from './_constants/STR_DISPLAY_NAME';
import STR_CHECKBOX from './_constants/STR_CHECKBOX';
import STR_CHECKBOX_LC from './_constants/STR_CHECKBOX_LC';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType(STR_CHECKBOX_LC);

const CheckBox = compose(Input, mergeProps);
CheckBox[STR_DISPLAY_NAME] = STR_CHECKBOX;

export default CheckBox;
