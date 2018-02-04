/**
 * Alias for the input type="month" tag.  Should be used when adding a month field
 * to a form.
 *
 * @module MonthInput
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import STR_DISPLAY_NAME from './_constants/STR_DISPLAY_NAME';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType('month');

const MonthInput = compose(Input, mergeProps);
MonthInput[STR_DISPLAY_NAME] = 'MonthInput';

export default MonthInput;
