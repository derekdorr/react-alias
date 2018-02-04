/**
 * Alias for the input type="date" tag.  Should be used when adding a date field
 * to a form.
 *
 * @module DateInput
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import STR_DISPLAY_NAME from './_constants/STR_DISPLAY_NAME';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType('date');

const DateInput = compose(Input, mergeProps);
DateInput[STR_DISPLAY_NAME] = 'DateInput';

export default DateInput;
