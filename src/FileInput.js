/**
 * Alias for the input type="file" tag.  Should be used when adding a file field
 * to a form.
 *
 * @module FileInput
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import _addDisplayName from './_internal/_addDisplayName';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType('file');
const FileInput = compose(Input, mergeProps);

export default _addDisplayName(FileInput, 'FileInput');
