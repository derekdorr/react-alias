/**
 * Alias for the <input type="text"> tag. Should be used when adding a text field
 * to a form.
 * 
 * @module TextInput
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import STR_DISPLAY_NAME from './_constants/STR_DISPLAY_NAME';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType('text');

const TextInput = compose(Input, mergeProps);
TextInput[STR_DISPLAY_NAME] = 'TextInput';

export default TextInput;
