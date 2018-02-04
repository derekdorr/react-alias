/**
 * Alias for the <iframe> tag. The IFrame element can be used to embed a separate
 * document into a document.
 * 
 * @module IFrame
 * @func
 * @since 1.0.0
 * @param {Object} props
 */

import _toLowerCase from './_internal/_toLowerCase';
import alias from './alias';

const STR_NAME = 'IFrame';
const STR_TAG = _toLowerCase(STR_NAME);

const IFrame = alias(STR_TAG, STR_NAME);

export default IFrame;
