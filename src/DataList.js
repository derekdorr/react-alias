/**
 * Alias for the <datalist> tag.  The DataList can contain a number of pre-defined
 * values for an Input element.
 *
 * @module DataList
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'DataList';
const STR_TAG = _toLowerCase(STR_NAME);

const DataList = alias(STR_TAG, STR_NAME);

export default DataList;
