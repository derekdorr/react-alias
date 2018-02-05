/**
 * Alias for the input type="submit" tag.  Should be used when adding a submit field
 * to a form.
 *
 * @module SubmitInput
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import _addDisplayName from './_internal/_addDisplayName';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType('submit');
const SubmitInput = compose(Input, mergeProps);

export default _addDisplayName(SubmitInput, 'SubmitInput');
