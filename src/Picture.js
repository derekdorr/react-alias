/**
 * Alias for the <picture> tag. The Picture element allows for additionally flexibility
 * in defining image resources above the Image element.
 *
 * @module Picture
 * @func
 * @since 1.0.0
 * @param {Object} props
 */


import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'Picture';
const STR_TAG = _toLowerCase(STR_NAME);

const Picture = alias(STR_TAG, STR_NAME);

export default Picture;
