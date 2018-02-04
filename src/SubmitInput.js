/**
 * Alias for the input type="submit" tag.  Should be used when adding a submit field
 * to a form.
 *
 * @module SubmitInput
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import STR_DISPLAY_NAME from './_constants/STR_DISPLAY_NAME';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType('submit');

const SubmitInput = compose(Input, mergeProps);
SubmitInput[STR_DISPLAY_NAME] = 'SubmitInput';

export default SubmitInput;
