/**
 * Alias for the <input type="number"> tag.  Should be used when adding a number field
 * to a form.
 *
 * @module NumberInput
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import STR_DISPLAY_NAME from './_constants/STR_DISPLAY_NAME';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType('number');

const NumberInput = compose(Input, mergeProps);
NumberInput[STR_DISPLAY_NAME] = 'NumberInput';

export default NumberInput;
