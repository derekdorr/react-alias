/**
 * Alias for the <input type="checkbox"> tag.  Should be used when adding a checkbox
 * to a form.
 *
 * @module CheckBox
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import STR_DISPLAY_NAME from './_constants/STR_DISPLAY_NAME';
import _mergeType from './_internal/_merge';
import Input from './Input';

const mergeProps = _mergeType('checkbox');

const CheckBox = compose(Input, mergeProps);
CheckBox[STR_DISPLAY_NAME] = 'CheckBox';

export default CheckBox;
