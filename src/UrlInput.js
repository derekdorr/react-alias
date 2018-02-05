/**
 * Alias for the input type="url" tag.  Should be used when adding a url field
 * to a form.
 *
 * @module UrlInput
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import _addDisplayName from './_internal/_addDisplayName';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType('url');
const UrlInput = compose(Input, mergeProps);

export default _addDisplayName(UrlInput, 'UrlInput');
