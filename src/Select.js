import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Select';
const STR_TAG = _toLowerCase(STR_NAME);

const Select = alias(STR_TAG, STR_NAME);

export default Select;
