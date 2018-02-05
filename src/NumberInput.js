/**
 * Alias for the input type="number" tag.  Should be used when adding a number field
 * to a form.
 *
 * @module NumberInput
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import _addDisplayName from './_internal/_addDisplayName';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType('number');
const NumberInput = compose(Input, mergeProps);

export default _addDisplayName(NumberInput, 'NumberInput');
