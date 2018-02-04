import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Title';
const STR_TAG = _toLowerCase(STR_NAME);

const Title = alias(STR_TAG, STR_NAME);

export default Title;
