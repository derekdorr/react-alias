import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Time';
const STR_TAG = _toLowerCase(STR_NAME);

const Time = alias(STR_TAG, STR_NAME);

export default Time;
