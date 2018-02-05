/**
 * Alias for the input type="hidden" tag.  Should be used when adding a hidden field
 * to a form.
 *
 * @module HiddenInput
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import _addDisplayName from './_internal/_addDisplayName';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType('hidden');
const HiddenInput = compose(Input, mergeProps);

export default _addDisplayName(HiddenInput, 'HiddenInput');
