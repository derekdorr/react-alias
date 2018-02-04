/**
 * Alias for the <input type="email"> tag.  Should be used when adding an email 
 * field to a form.
 *
 * @module EmailInput
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import STR_DISPLAY_NAME from './_constants/STR_DISPLAY_NAME';
import STR_EMAIL_LC from './_constants/STR_EMAIL_LC';
import STR_EMAIL_INPUT from './_constants/STR_EMAIL_INPUT';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType(STR_EMAIL_LC);

const EmailInput = compose(Input, mergeProps);
EmailInput[STR_DISPLAY_NAME] = STR_EMAIL_INPUT;

export default EmailInput;
