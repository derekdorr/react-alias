/**
 * Alias for the input type="radio" tag.  Should be used when adding a radio field
 * to a form.
 *
 * @module RadioInput
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import STR_DISPLAY_NAME from './_constants/STR_DISPLAY_NAME';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType('radio');

const RadioInput = compose(Input, mergeProps);
RadioInput[STR_DISPLAY_NAME] = 'RadioInput';

export default RadioInput;
