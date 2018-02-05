/**
 * Alias for the input type="month" tag.  Should be used when adding a month field
 * to a form.
 *
 * @module MonthInput
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import _addDisplayName from './_internal/_addDisplayName';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType('month');
const MonthInput = compose(Input, mergeProps);

export default _addDisplayName(MonthInput, 'MonthInput');
