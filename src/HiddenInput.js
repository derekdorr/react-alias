/**
 * Alias for the input type="hidden" tag.  Should be used when adding a hidden field
 * to a form.
 *
 * @module HiddenInput
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import STR_DISPLAY_NAME from './_constants/STR_DISPLAY_NAME';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType('hidden');

const HiddenInput = compose(Input, mergeProps);
HiddenInput[STR_DISPLAY_NAME] = 'HiddenInput';

export default HiddenInput;
