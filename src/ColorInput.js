/**
 * Alias for the input type="color" tag.  Should be used when adding a color field
 * to a form.
 *
 * @module ColorInput
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import _addDisplayName from './_internal/_addDisplayName';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType('color');
const ColorInput = compose(Input, mergeProps);

export default _addDisplayName(ColorInput, 'ColorInput');
