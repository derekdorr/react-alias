/**
 * Alias for the <input type="password"> tag.  Should be used when adding a password
 * field to a form.
 *
 * @module CheckBox
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import STR_DISPLAY_NAME from './_constants/STR_DISPLAY_NAME';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType('password');

const PasswordInput = compose(Input, mergeProps);
PasswordInput[STR_DISPLAY_NAME] = 'PasswordInput';

export default PasswordInput;
