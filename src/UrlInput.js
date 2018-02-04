/**
 * Alias for the <input type="url"> tag.  Should be used when adding a url field
 * to a form.
 * 
 * @module UrlInput
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import STR_DISPLAY_NAME from './_constants/STR_DISPLAY_NAME';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType('url');

const UrlInput = compose(Input, mergeProps);
UrlInput[STR_DISPLAY_NAME] = 'UrlInput';

export default UrlInput;
