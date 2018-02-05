/**
 * Alias for the input type="reset" tag.  Should be used when adding a reset field
 * to a form.
 *
 * @module ResetInput
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import _addDisplayName from './_internal/_addDisplayName';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType('reset');
const ResetInput = compose(Input, mergeProps);

export default _addDisplayName(ResetInput, 'ResetInput');
