/**
 * Alias for the table tag. The Table element defines a table layout.
 *
 * @module Table
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import alias from './alias';
import STR_TABLE from './_constants/STR_TABLE';
import STR_TABLE_LC from './_constants/STR_TABLE_LC';

const Table = alias(STR_TABLE_LC, STR_TABLE);

export default Table;
