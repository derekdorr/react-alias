import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Summary';
const STR_TAG = _toLowerCase(STR_NAME);

const Summary = alias(STR_TAG, STR_NAME);

export default Summary;
