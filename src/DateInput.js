/**
 * Alias for the input type="date" tag.  Should be used when adding a date field
 * to a form.
 *
 * @module DateInput
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import _addDisplayName from './_internal/_addDisplayName';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType('date');
const DateInput = compose(Input, mergeProps);

export default _addDisplayName(DateInput, 'DateInput');
