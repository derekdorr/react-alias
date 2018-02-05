/**
 * Alias for the input type="range" tag.  Should be used when adding a range field
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

const mergeProps = _mergeType('range');
const RangeInput = compose(Input, mergeProps);

export default _addDisplayName(RangeInput, 'RangeInput');
