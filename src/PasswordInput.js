/**
 * Alias for the input type="password" tag.  Should be used when adding a password
 * field to a form.
 *
 * @module CheckBox
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import _addDisplayName from './_internal/_addDisplayName';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType('password');
const PasswordInput = compose(Input, mergeProps);

export default _addDisplayName(PasswordInput, 'PasswordInput');
