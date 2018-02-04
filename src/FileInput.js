/**
 * Alias for the <input type="file"> tag.  Should be used when adding a file field
 * to a form.
 *
 * @module FileInput
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import STR_DISPLAY_NAME from './_constants/STR_DISPLAY_NAME';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType('file');

const FileInput = compose(Input, mergeProps);
FileInput[STR_DISPLAY_NAME] = 'FileInput';

export default FileInput;
