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
import _addDisplayName from './_internal/_addDisplayName';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType('radio');
const RadioInput = compose(Input, mergeProps);

export default _addDisplayName(RadioInput, 'RadioInput');
