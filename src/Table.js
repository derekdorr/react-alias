import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Table';
const STR_TAG = _toLowerCase(STR_NAME);

const Table = alias(STR_TAG, STR_NAME);

export default Table;
