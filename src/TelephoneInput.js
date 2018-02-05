/**
 * Alias for the input type="tel" tag.  Should be used when adding a telephone field
 * to a form.
 *
 * @module TelephoneInput
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import _addDisplayName from './_internal/_addDisplayName';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType('tel');
const TelephoneInput = compose(Input, mergeProps);

export default _addDisplayName(TelephoneInput, 'TelephoneInput');
