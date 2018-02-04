import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Style';
const STR_TAG = _toLowerCase(STR_NAME);

const Style = alias(STR_TAG, STR_NAME);

export default Style;
