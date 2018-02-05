/**
 * Alias for the input type="search" tag.  Should be used when adding a search field
 * to a form.
 *
 * @module SearchInput
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import _addDisplayName from './_internal/_addDisplayName';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType('search');
const SearchInput = compose(Input, mergeProps);

export default _addDisplayName(SearchInput, 'SearchInput');
