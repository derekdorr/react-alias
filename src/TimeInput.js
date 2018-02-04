/**
 * Alias for the <input type="time"> tag.  Should be used when adding a time field
 * to a form.
 *
 * @module TimeInput
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import STR_DISPLAY_NAME from './_constants/STR_DISPLAY_NAME';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType('time');

const TimeInput = compose(Input, mergeProps);
TimeInput[STR_DISPLAY_NAME] = 'TimeInput';

export default TimeInput;
