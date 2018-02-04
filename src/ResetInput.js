/**
 * Alias for the <input type="reset"> tag.  Should be used when adding a reset field
 * to a form.
 *
 * @module ResetInput
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import STR_DISPLAY_NAME from './_constants/STR_DISPLAY_NAME';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType('reset');

const ResetInput = compose(Input, mergeProps);
ResetInput[STR_DISPLAY_NAME] = 'ResetInput';

export default ResetInput;
