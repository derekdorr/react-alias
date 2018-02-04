import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Strong';
const STR_TAG = _toLowerCase(STR_NAME);

const Strong = alias(STR_TAG, STR_NAME);

export default Strong;
