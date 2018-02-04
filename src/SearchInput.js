/**
 * Alias for the <input type="search"> tag.  Should be used when adding a search field
 * to a form.
 * 
 * @module SearchInput
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import { compose } from 'skald';
import STR_DISPLAY_NAME from './_constants/STR_DISPLAY_NAME';
import _mergeType from './_internal/_mergeType';
import Input from './Input';

const mergeProps = _mergeType('search');

const SearchInput = compose(Input, mergeProps);
SearchInput[STR_DISPLAY_NAME] = 'SearchInput';

export default SearchInput;
