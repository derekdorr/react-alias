/**
 * Alias for the input type="time" tag.  Should be used when adding a time field
 * to a form.
 *
 * @module TimeInput
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import STR_TIME_INPUT from './_constants/STR_TIME_INPUT';
import STR_TIME_LC from './_constants/STR_TIME_LC';
import _addDisplayName from './_internal/_addDisplayName';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType(STR_TIME_LC);
const TimeInput = compose(Input, mergeProps);

export default _addDisplayName(TimeInput, STR_TIME_INPUT);
