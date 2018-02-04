/**
 * Alias for the input type="image" tag.  Should be used when adding an image field
 * to a form.
 *
 * @module FileInput
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import STR_DISPLAY_NAME from './_constants/STR_DISPLAY_NAME';
import STR_IMAGE_INPUT from './_constants/STR_IMAGE_INPUT';
import STR_IMAGE_LC from './_constants/STR_IMAGE_LC';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType(STR_IMAGE_LC);

const ImageInput = compose(Input, mergeProps);
ImageInput[STR_DISPLAY_NAME] = STR_IMAGE_INPUT;

export default ImageInput;
