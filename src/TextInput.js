/**
 * Alias for the input type="text" tag. Should be used when adding a text field
 * to a form.
 *
 * @module TextInput
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import STR_TEXT_LC from './_constants/STR_TEXT_LC';
import STR_TEXT_INPUT from './_constants/STR_TEXT_INPUT';
import _addDisplayName from './_internal/_addDisplayName';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType(STR_TEXT_LC);
const TextInput = compose(Input, mergeProps);

export default _addDisplayName(TextInput, STR_TEXT_INPUT);
